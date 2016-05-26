const pgFunctions = require('../../data/pgLetter.js')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/change-letter-status',
  method: 'POST',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.changeLetterStatus(client, done, request.query.letter_id, request.query.newStatus)
      reply.redirect('/clinician-dashboard')
    })
  }
}
