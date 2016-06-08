const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
require('env2')('config.env')

const signUpPatient = (client, done, data, reply) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobile: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().alphanum().min(5).max(30).required(),
    password: Joi.string().min(8).required()
  })

  Joi.validate({
    username: data.patient_id,
    password: data.password_hash,
    firstName: data.first_name,
    lastName: data.last_name,
    mobile: data.mobile_number,
    email: data.email
  },
    schema, (err, value) => {
      if (!err) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(data.password_hash, salt)
        client.query('INSERT INTO patients VALUES ($1, $2, $3, $4, $5, $6)',
        [ data.patient_id, data.first_name, data.last_name, data.email, data.mobile_number, hash ], (err) => {
          if (err) {
            console.error('error running query', err)
            reply('user already exists')
          } else {
            const token = jwt.sign({ patientID: data.patient_id }, process.env.JWT_SECRET)
            reply().state('patient_id', token, {
              ttl: 24 * 60 * 60 * 1000,
              isSecure: false,
              path: '/'
            })
            done()
          }
        })
      } else if (err.details[0].path === 'username') {
        reply('invalid username')
      } else if (err.details[0].path === 'password') {
        reply('invalid password')
      } else if (err.details[0].path === 'firstName' ||
                err.details[0].path === 'lastName' ||
                err.details[0].path === 'mobile') {
        reply('missing required field')
      } else if (err.details[0].path === 'email') {
        reply('invalid email')
      }
    })
}

const checkPatientLogin = (client, done, data, reply) => {
  client.query('SELECT password_hash FROM patients WHERE patient_id = $1',
    [ data.patient_id ], (err, result) => {
      if (err) {
        console.error('error running query', err)
      }
      const hash = result.rows[0] ? result.rows[0].password_hash : ''

      if (bcrypt.compareSync(data.password_hash, hash)) {
        const token = jwt.sign({ patientID: data.patient_id }, process.env.JWT_SECRET)
        reply().state('patient_id', token, {
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

const getPatientLetters = (client, done, patientID, reply) => {
  const decoded = jwt.verify(patientID, process.env.JWT_SECRET)
  client.query('SELECT * FROM letters WHERE patient_id = $1', [ decoded.patientID ], (err, result) => {
    if (err) {
      return console.error('error running query', err)
    }
    reply(JSON.stringify(result.rows))
    done()
  })
}

module.exports = {
  signUpPatient,
  checkPatientLogin,
  getPatientLetters
}
