const jwt = require('jsonwebtoken')

const addNewLetter = (client, done, data, reply) => {
  const decoded = jwt.verify(data.clinician_id, process.env.JWT_SECRET)
  client.query('INSERT INTO letters VALUES ($1, $2, $3, $4, $5, $6);',
    [
      data.topic,
      data.recipient,
      data.patient_id,
      data.possible_statuses['1'],
      data.possible_statuses,
      data.date_created
    ])
  client.query('SELECT patient_id FROM clinicians_patients WHERE clinician_id = $1',
    [ decoded.clinicianID ], (err, result) => {
      console.log(result)
      if (err) {
        console.error(err)
      }
      if (result.rows.filter(row => row.patient_id === data.patient_id).length === 0) {
        client.query('INSERT INTO clinicians_patients VALUES ($1, $2)', [ decoded.clinicianID, data.patient_id ], (error) => {
          if (error) console.error(error)
        })
        reply('success - patient inserted into clinicians_patients')
      } else {
        reply('success - patient already existed')
      }
    })
  done()
}

const changeLetterStatus = (client, done, date_created, newStatus) => {
  client.query('UPDATE letters SET status = $1 WHERE date_created = $2', [ newStatus, date_created ])
  done()
}

const removeLetter = (client, done, date_created) => {
  client.query('DELETE FROM letters WHERE date_created = $1',
    [ date_created ])
  done()
}

module.exports = {
  addNewLetter,
  changeLetterStatus,
  removeLetter
}
