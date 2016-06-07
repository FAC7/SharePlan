const pgFunctions = require('../../data/pgClinician.js')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/signup-clinician',
  method: 'POST',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.signUpClinician(client, done, request.payload, reply)
      // reply.redirect('/clinician-dashboard')
    })
  }
}
