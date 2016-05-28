const addNewLetter = (client, done, data, reply) => {
  client.query('INSERT INTO letters VALUES ($1, $2, $3, $4, $5, $6);',
    [
      data.topic,
      data.recipients,
      data.patient_id,
      data.possible_statuses['1'],
      data.possible_statuses,
      data.date_created,
    ])
  client.query('SELECT patient_id FROM clinicians_patients WHERE clinician_id = $1',
    [ data.clinician_id ], (err, result) => {
      console.log(result.rows)
      if (result.rows.filter(row => row.patient_id === data.patient_id).length === 0) {
        client.query('INSERT INTO clinicians_patients VALUES ($1, $2)', [ data.clinician_id, data.patient_id ], (error) => {
          if (error) console.error(error)
        })
        reply('success - patient inserted into clinicians_patients')
      } else {
        reply('success - patient already existed')
      }
    })
  done()
}

const changeLetterStatus = (client, done, letter_id, newStatus) => {
  client.query('UPDATE letters SET status = $1 WHERE id = $2', [ newStatus, letter_id ])
  done()
}

const removeLetter = (client, done, letter_id) => {
  client.query('DELETE FROM letters WHERE id = $1',
    [ letter_id ])
  done()
}

module.exports = {
  addNewLetter,
  changeLetterStatus,
  removeLetter
}
