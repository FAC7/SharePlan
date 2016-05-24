const pg = require('pg')
const conString = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost/shareplan'
const sinon  = require('sinon')
const tape = require('tape')
const postgresFunctions = require('../../data/postgresFunctions')

// pg.connect(conString, (err, client, done) => {
//   if (err) {
//     return console.error('error fetching client from pool', err)
//   }
//   client.query('Insert into "Patients" values (\'123ssds45\', \'Kat\', \'Bow\', \'me@me.com\', \'23456789\', \'tyfgf78weiuyfgh\')', (error, result) => {
//     done()

//     if (error) {
//       return console.error('error running query', error)
//     }
//     console.log(result)
//   })
// })
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

  t.ok(query.called)
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
  t.ok(query.calledWith('SELECT password_hash FROM patients WHERE patient_id = $1', ['patient_id']))
  t.end()
})
