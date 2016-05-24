require('env2')('./config.env')

const Hapi = require('hapi')

// Server Plugins
const Inert = require('inert')

const Plugins = [ Inert ]

// Server Routes
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')
const PatientData = require('./routes/PatientData.js')
const ClientLogin = require('./routes/ClientLogin.js')

const Routes = [ Images, ReactUrls, Scripts, PatientData, ClientLogin ]


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
