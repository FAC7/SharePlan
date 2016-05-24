const sinon = require('sinon')
const tape = require('tape')
const postgresFunctions = require('../../data/postgresFunctions')

let client, query, done

const setupStubbedPostgres = () => {
  client = { query: () => {} }
  query = sinon.stub(client, 'query', () => {
    console.log('called client.query')
  })
  done = sinon.stub()
}

tape('it should call the client.query function', (t) => {
  setupStubbedPostgres()

  postgresFunctions.addPatient(client, done, {
    first_name: 'first_name',
    last_name: 'last_name',
    patient_id: 'patient_id',
    email: 'email',
    mobile_number: 'mobile_number',
    password_hash: 'password_hash',
    password_confirm: 'password_confirm'
  })

  t.ok(query.called, 'addPatient calls query')
  t.end()
})

tape('it should call "done" after calling addPatient', (t) => {
  setupStubbedPostgres()

  postgresFunctions.addPatient(client, done, {
    first_name: 'first_name',
    last_name: 'last_name',
    patient_id: 'patient_id',
    email: 'email',
    mobile_number: 'mobile_number',
    password_hash: 'password_hash',
    password_confirm: 'password_confirm'
  })

  t.ok(done.calledAfter(query))
  t.end()
})

tape('checkLogin should make a query to the database for the password_hash', (t) => {
  setupStubbedPostgres()
  postgresFunctions.checkLogin(client, done, {
    patient_id: 'patient_id',
    password: 'password'
  })
  t.ok(query.calledWith('SELECT password_hash FROM patients WHERE patient_id = $1', [ 'patient_id' ]))
  t.end()
})
