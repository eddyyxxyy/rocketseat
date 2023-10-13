import dotenv from 'dotenv';
import { z } from 'zod';

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

const port = parseInt(process.env.PORT || '3333', 10);

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.number(),
});

const _env = envSchema.safeParse({ ...process.env, PORT: port });

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format());

  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
