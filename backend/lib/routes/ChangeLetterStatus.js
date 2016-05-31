const pgFunctions = require('../../data/pgLetter.js')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/change-letter-status',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.payload, '<<<<reqpayload')
    pg.connect(conString, (err, client, done) => {
      console.log('REQUEST')
      if (err) {
        console.error('error fetching client from pool', err)
      }
      pgFunctions.changeLetterStatus(client, done, request.payload.date_created, request.payload.newStatus)
      reply.redirect('/clinician-dashboard')
    })
  }
}
