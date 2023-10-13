import { knex as setupKnex, Knex } from 'knex';

import { env } from './env';

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  pool: {
    min: 1,
    max: 10,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
  useNullAsDefault: true,
  acquireConnectionTimeout: 10000,
};

export const knex = setupKnex(config);
