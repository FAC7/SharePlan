const pgFunctions = require('../../data/pgPatient')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/get-patient-letters',
  method: 'GET',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.getPatientLetters(client, done, request.query.patient_id, reply)
    })
  }
}
