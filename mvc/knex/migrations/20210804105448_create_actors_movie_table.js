/**
 * @param {import('knex').Knex} knex
 */
exports.up = (knex) =>
  knex.schema.createTable("actors_movie", (table) => {
    table.increments();
    table.integer("actor_id").unsigned().notNullable();
    table.integer("movie_id").unsigned().notNullable();
    table.foreign("actor_id").references("id").inTable("actors");
    table.foreign("movie_id").references("id").inTable("movies");
  });

/**
 * @param {import('knex').Knex} knex
 */
exports.down = (knex) => knex.schema.dropTable("actors_movie");
