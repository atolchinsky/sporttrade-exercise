import { Config } from 'knex'
import * as dotenv from 'dotenv-safe'

dotenv.config({
  allowEmptyValues: true,
  path: process.env.CLI ? '../.env' : '.env',
  example: process.env.CLI ? '../.env.example' : '.env.example',
})

export = {
  client: 'pg',
  connection: {
    port: 5432,
    host: '0.0.0.0',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    timezone: 'UTC',
    dateStrings: true,
  },
  pool: {
    min: Number(process.env.DATABASE_POOL_MIN) || 2,
    max: Number(process.env.DATABASE_POOL_MAX) || 5,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations',
    loadExtensions: ['.ts'],
    extension: 'ts',
  },
  seeds: {
    directory: './db/seeds',
    loadExtensions: ['.ts'],
    extension: 'ts',
  },
} as Config
