const databaseName = 'passport_local_knex';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgresql://postgres:root@localhost:5434/${databaseName}`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgresql://postgres:root@localhost:5434/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
