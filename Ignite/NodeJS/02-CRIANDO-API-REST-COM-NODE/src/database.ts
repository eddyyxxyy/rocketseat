import { knex as setupKnex, Knex } from 'knex';

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  pool: {
    min: 1,
    max: 10,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
  useNullAsDefault: true,
  debug: true,
  acquireConnectionTimeout: 10000,
};

export const knex = setupKnex(config);
