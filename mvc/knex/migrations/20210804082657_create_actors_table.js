/**
 * @param {import('knex').Knex} knex
 */
exports.up = (knex) =>
  knex.schema.createTable("actors", (table) => {
    table.increments();
    table.string("full_name").notNullable();
    table.date("date_of_birth").notNullable();
    table.string("image").notNullable();
  });

/**
 * @param {import('knex').Knex} knex
 */
exports.down = (knex) => knex.schema.dropTable("actors");
