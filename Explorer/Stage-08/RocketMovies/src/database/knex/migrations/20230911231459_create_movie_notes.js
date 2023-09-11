exports.up = (knex) =>
  knex.schema.createTable("movie_notes", (table) => {
    table.increments("id"),
      table.string("title").notNullable(),
      table.string("description").notNullable(),
      table.integer("rating").notNullable(),
      table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete("CASCADE"),
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now()),
      table.timestamp("modified_at").notNullable().defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("movie_notes");
