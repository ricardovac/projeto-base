const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // As ultimas tabelas serão criadas automaticamentes
module.exports = knex