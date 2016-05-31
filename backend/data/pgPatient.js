var bcrypt = require('bcryptjs')

const signUpPatient = (client, done, data) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(data.password_hash, salt)
  client.query('INSERT INTO patients VALUES ($1, $2, $3, $4, $5, $6)',
    [ data.patient_id, data.first_name, data.last_name, data.email, data.mobile_number, hash ], (err) => {
      if (err) {
        return console.error('error running query', err)
      }
      done()
    })
}

const checkPatientLogin = (client, done, data, reply) => {
  client.query('SELECT password_hash FROM patients WHERE patient_id = $1',
    [ data.patient_id ], (err, result) => {
      if (err) {
        return console.error('error running query', err)
      }
      const hash = result.rows[0] ? result.rows[0].password_hash : ''

      if (bcrypt.compareSync(data.password_hash, hash)) {
        reply.redirect('/client-dashboard')
      } else {
        reply('incorrect password')
      }
      done()
    })
}

const getPatientLetters = (client, done, patientID, reply) => {
  client.query('SELECT * FROM letters WHERE patient_id = $1', [ patientID ], (err, result) => {
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
