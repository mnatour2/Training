/**
 * @param {import('knex').Knex} knex
 */
exports.up = (knex) =>
  knex.schema.createTable("users_favorites", (table) => {
    table.increments();
    table.integer("user_id").unsigned().notNullable();
    table.integer("movie_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("users");
    table.foreign("movie_id").references("id").inTable("movies");
  });

/**
 * @param {import('knex').Knex} knex
 */
exports.down = (knex) => knex.schema.dropTable("users_favorites");
