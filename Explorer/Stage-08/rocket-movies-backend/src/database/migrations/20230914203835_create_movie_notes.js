exports.up = function (knex) {
  return knex.schema.createTable('movie_notes', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('rating').unsigned().notNullable();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable();
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('modified_at').default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('movie_notes');
};
