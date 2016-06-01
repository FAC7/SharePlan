const bcrypt = require('bcryptjs')

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
        reply.redirect('/clinician-dashboard')
      } else {
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
