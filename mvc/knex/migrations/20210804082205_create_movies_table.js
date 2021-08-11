/**
 * @param {import('knex').Knex} knex
 */
exports.up = (knex) =>
  knex.schema.createTable("movies", (table) => {
    table.increments();
    table.string("movie_name").notNullable();
    table.string("year").notNullable();
    table.string("country").notNullable();
    table.string("poster");
  });
/**
 * @param {import('knex').Knex} knex
 */
exports.down = (knex) => knex.schema.dropTable("movies");
