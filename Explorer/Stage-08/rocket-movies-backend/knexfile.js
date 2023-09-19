module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.db',
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 10,
      idleTimeoutMillis: 30000,
      acquireTimeoutMillis: 30000,
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
    migrations: {
      directory: './src/database/migrations/',
    },
  },
};
