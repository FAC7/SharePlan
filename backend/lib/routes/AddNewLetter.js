const pgFunctions = require('../../data/pgLetter.js')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/add-new-letter',
  method: 'POST',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.addNewLetter(client, done, request.payload, reply)
    })
  }
}
