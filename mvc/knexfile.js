// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    debug: true,
    log: {
      debug(message) {
        if (Array.isArray(message)) {
          message.forEach((object) => {
            console.log(
              "\u001B[36m",
              "\u001B[40m",
              object.sql,
              " \u001B[32m",
              object.bindings,
              "\u001B[0m"
            );
          });
        } else {
          console.log(
            "\u001B[36m",
            "\u001B[40m",
            message.sql,
            " \u001B[32m",
            message.bindings,
            "\u001B[0m"
          );
        }
      },
    },
    connection: {
      host: "localhost",
      user: "root",
      password: "admin",
      database: "training",
    },
    migrations: {
      directory: `${__dirname}/knex/migrations`,
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
