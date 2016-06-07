const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
require('env2')('config.env')

const signUpClinician = (client, done, data, reply) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(5).max(30).required(),
    password: Joi.string().min(8).required()
  })

  Joi.validate({ username: data.clinician_id, password: data.password_hash },
    schema, (err, value) => {
      if (!err) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(data.password_hash, salt)
        client.query('INSERT INTO clinicians VALUES ($1, $2)',
        [ data.clinician_id, hash ], (err, result) => {
          if (err) {
            return console.error('error running query', err)
          }
          const token = jwt.sign({ clinicianID: data.clinician_id }, process.env.JWT_SECRET)
          reply().state('clinician_id', token, {
            ttl: 24 * 60 * 60 * 1000,
            isSecure: false,
            path: '/'
          })
          done()
        })
      } else if (err.details[0].path === 'username') {
        reply('invalid username')
      } else if (err.details[0].path === 'password') {
        reply('invalid password')
      }
    })
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
        reply('incorrect password')
      }
      done()
    })
}

const getAllPatientsLetters = (client, done, clinician_id, reply) => {
  const decoded = jwt.verify(clinician_id, process.env.JWT_SECRET)
  client.query(
    'SELECT clinicians_patients.patient_id, topic, recipient, status, date_created ' +
    'FROM clinicians_patients, letters ' +
    'WHERE clinicians_patients.clinician_id = $1 ' +
    'AND clinicians_patients.patient_id = letters.patient_id ',
    [ decoded.clinicianID ], (err, result) => {
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
