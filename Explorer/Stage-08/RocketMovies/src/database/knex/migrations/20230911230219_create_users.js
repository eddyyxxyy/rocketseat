exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id"),
      table.string("name").notNullable(),
      table.string("email").notNullable(),
      table.string("password").notNullable(),
      table.string("avatar").nullable(),
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now()),
      table.timestamp("modified_at").notNullable().defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
