exports.up = (knex) => {
  return knex.schema.createTable('movie_tags', (table) => {
    table.increments('id');
    table
      .integer('notes_id')
      .unsigned()
      .references('movie_notes.id')
      .onDelete('CASCADE')
      .notNullable();
    table.integer('user_id').unsigned().references('users.id').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('movie_tags');
};
