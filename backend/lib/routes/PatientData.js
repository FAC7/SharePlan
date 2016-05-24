const postgresFunctions = require('../../data/postgresFunctions')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'


module.exports = {
  path: '/addpatient',
  method: 'POST',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      postgresFunctions.addPatient(client, done, request.payload)
      console.log(request.payload)
      reply.redirect('/cliniciandashboard')
    })
  }
}
