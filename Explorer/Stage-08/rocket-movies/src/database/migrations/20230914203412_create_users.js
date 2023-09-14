exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('avatar');
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('modified_at').default(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
