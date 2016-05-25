const Hapi = require('hapi')

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

const Routes = [
  Images,
  ReactUrls,
  Scripts,
  SignUpPatient,
  LoginPatient,
  GetPatientLetters,
  GetAllPatientsLetters,
  LoginClinician,
  SignUpClinician
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

  return server
}
