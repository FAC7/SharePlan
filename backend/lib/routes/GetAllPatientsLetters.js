const pgFunctions = require('../../data/pgClinician')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/get-all-patients-letters',
  method: 'GET',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.getAllPatientsLetters(client, done, request.query.clinician_id, reply)
    })
  }
}
