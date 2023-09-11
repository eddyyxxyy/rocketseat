exports.up = (knex) =>
  knex.schema.createTable("movie_tags", (table) => {
    table.increments("id"),
      table.string("name").notNullable(),
      table.integer("user_id").notNullable().references("id").inTable("users"),
      table
        .integer("note_id")
        .notNullable()
        .references("id")
        .inTable("movie_notes")
        .onDelete("CASCADE");
  });

exports.down = (knex) => knex.schema.dropTable("movie_tags");
