import fastify from 'fastify';

import { knex } from './database';

const app = fastify();

const PORT = 3333;

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*');

  return tables;
});

app
  .listen({
    port: PORT,
  })
  .then(() => console.log('HTTP SERVER RUNNING AT PORT: ' + PORT));
