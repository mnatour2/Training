/**
 * @param {import('knex').Knex} knex
 */
exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.string("mobile").notNullable();
    table.string("email").notNullable();
    table.string("picture").notNullable();
  });

/**
 * @param {import('knex').Knex} knex
 */
exports.down = (knex) => knex.schema.dropTable("users");
