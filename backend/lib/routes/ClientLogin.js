const postgresFunctions = require('../../data/postgresFunctions')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'

module.exports = {
  path: '/checkclient',
  method: 'POST',
  handler: (request, reply) => {
    pg.connect(conString, (err, client, done) => {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      postgresFunctions.checkLogin(client, done, request.payload, reply)
      console.log('PAYLOAD', request.payload)
    })
  }
}
