import { execSync } from 'node:child_process';
import os from 'node:os';

import request from 'supertest';

import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { app } from '../src/app';

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    if (os.platform() === 'win32') {
      execSync('npm run knexWin migrate:rollback --all');
      execSync('npm run knexWin migrate:latest');
    } else {
      execSync('npm run knex migrate:rollback --all');
      execSync('npm run knex migrate:latest');
    }
  });

  it('should be able to create a new transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'New Transaction',
      amount: 5000,
      type: 'credit',
    });

    expect(response.statusCode).toEqual(201);
  });

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        amount: 5000,
        type: 'credit',
      });

    const cookies = createTransactionResponse.get('Set-Cookie');

    const response = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies);

    expect(response.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New Transaction',
        amount: 5000,
      }),
    ]);
  });

  it('should be able to get an specific transaction', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        amount: 5000,
        type: 'credit',
      });

    const cookies = createTransactionResponse.get('Set-Cookie');

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies);

    const transactionId = listTransactionsResponse.body.transactions[0].id;

    const getTransactionResponse = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set('Cookie', cookies);

    expect(getTransactionResponse.body.transaction).toEqual(
      expect.objectContaining({ title: 'New Transaction', amount: 5000 }),
    );
  });

  it('should be able to get the summary', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Credit Transaction',
        amount: 5000,
        type: 'credit',
      });

    const cookies = createTransactionResponse.get('Set-Cookie');

    await request(app.server)
      .post('/transactions')
      .set('Cookie', cookies)
      .send({
        title: 'Debit transaction',
        amount: 2000,
        type: 'debit',
      });

    const summaryResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies);

    expect(summaryResponse.body.summary).toEqual({ amount: 3000 });
  });
});
