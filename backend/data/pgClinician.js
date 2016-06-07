const bcrypt = require('bcryptjs')
// const hapiAuthjwt = require('hapi-auth-jwt2')
const jwt = require('jsonwebtoken')
require('env2')('config.env')

const signUpClinician = (client, done, data) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(data.password_hash, salt)
  client.query('INSERT INTO clinicians VALUES ($1, $2)',
    [ data.clinician_id, hash ])
  done()
}

const checkClinicianLogin = (client, done, data, reply) => {
  client.query('SELECT password_hash FROM clinicians WHERE clinician_id = $1',
    [ data.clinician_id ], (err, result) => {
      if (err) {
        return console.error('error running query', err)
      }
      const hash = result.rows[0] ? result.rows[0].password_hash : ''
      if (bcrypt.compareSync(data.password_hash, hash)) {
        const token = jwt.sign({ clinicianID: data.clinician_id }, process.env.JWT_SECRET)
        reply().state('clinician_id', token, {
          ttl: 24 * 60 * 60 * 1000,
          isSecure: false,
          path: '/'
        })
      } else {
        console.log('wrong')
        reply('incorrect password')
      }
      done()
    })
}

const getAllPatientsLetters = (client, done, clinician_id, reply) => {
  client.query(
    'SELECT clinicians_patients.patient_id, topic, recipient, status, date_created ' +
    'FROM clinicians_patients, letters ' +
    'WHERE clinicians_patients.clinician_id = $1 ' +
    'AND clinicians_patients.patient_id = letters.patient_id ',
    [ clinician_id ], (err, result) => {
      if (err) {
        console.error('error running query', err)
      }
      reply(JSON.stringify(result.rows))
      done()
    }
  )
}

module.exports = {
  signUpClinician,
  checkClinicianLogin,
  getAllPatientsLetters
}
