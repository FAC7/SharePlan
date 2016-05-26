const Hapi = require('hapi')
const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'
const pgSetup = require('../data/pgSetup.js')

// Server Plugins
const Inert = require('inert')

const Plugins = [ Inert ]

// Server Routes
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')
const SignUpPatient = require('./routes/SignUpPatient.js')
const SignUpClinician = require('./routes/SignUpClinician.js')
const LoginPatient = require('./routes/LoginPatient.js')
const LoginClinician = require('./routes/LoginClinician.js')
const GetPatientLetters = require('./routes/GetPatientLetters.js')
const GetAllPatientsLetters = require('./routes/GetAllPatientsLetters.js')
const RemoveLetter = require('./routes/RemoveLetter.js')

const Routes = [
  Images,
  ReactUrls,
  Scripts,
  SignUpPatient,
  LoginPatient,
  GetPatientLetters,
  GetAllPatientsLetters,
  LoginClinician,
  SignUpClinician,
  RemoveLetter
]

// Export the Server
module.exports = () => {

  const server = new Hapi.Server()

  server.connection({
    port: process.env.PORT || 4000,
    // cors is the Cross-Origin Resource Sharing protocol.
    // It allows browsers to make cross-origin API calls.
    routes: {
      cors: true
    }
  })

  server.register(Plugins, (err) => {
    if (err) {
      console.log('plugins err: ', err)
      throw err
    }
  })
  server.route(Routes)

  pg.connect(conString, (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err)
    }
    pgSetup(client, done)
  })

  return server
}
