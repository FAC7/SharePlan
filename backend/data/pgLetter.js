const addNewLetter = (client, done, patient_id, letterData) => {
  client.query('INSERT INTO letters VALUES ($1, $2, $3, $4, $5)',
    [
      letterData.topic,
      letterData.recipient,
      patient_id,
      letterData.status,
      letterData.possibleStatuses,
    ])
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
