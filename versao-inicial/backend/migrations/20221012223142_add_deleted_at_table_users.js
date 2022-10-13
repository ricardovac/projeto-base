
exports.up = function (knex) {
  return knex.schema.alterTable('users', table => {
    table.timestamp('deleteAt')
  })
};

exports.down = function (knex) {
  return knex.schema.alterTable('users', table => {
    table.dropColumn('deleteAt')
  })
};
