const pgFunctions = require('../../data/pgLetter.js')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/remove-letter',
  method: 'GET',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.removeLetter(client, done, request.query.letter_id)
      reply.redirect('/clinician-dashboard')
    })
  }
}
