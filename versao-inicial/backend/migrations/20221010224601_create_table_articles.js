
exports.up = function (knex, Promise) {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary()
    table.string('name').notNull() // notNull = obrigatório
    table.string('description', 1000).notNull()
    table.string('imageUrl', 1000) // 1000 caracteres
    table.binary('content').notNull()
    table.integer('userId').references('id')
      .inTable('users')
    table.integer('categoryId').references('id')
      .inTable('categories').notNull()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('articles')
};
