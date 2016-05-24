const pgFunctions = require('../../data/pgPatient.js')
const pg = require('pg')
const conString = 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/login-patient',
  method: 'POST',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      pgFunctions.checkPatientLogin(client, done, request.payload, reply)
    })
  }
}
