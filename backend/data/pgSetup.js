module.exports = (client, done) => {
  client.query('SELECT * FROM patients', [], (error) => {
    if (error) {
      client.query('CREATE TABLE public.patients( ' +
      'patient_id text NOT NULL, ' +
      'first_name text, ' +
      'last_name text, ' +
      'email text, ' +
      'mobile_number text, ' +
      'password_hash text, ' +
      'id serial, ' +
      'CONSTRAINT "patients_pkey" PRIMARY KEY (patient_id))')

      client.query('CREATE TABLE public.letters( ' +
      'topic text, ' +
      'recipient text, ' +
      'patient_id text, ' +
      'status text, ' +
      'possible_statuses text, ' +
      'date_created text, ' +
      'id serial, ' +
      'CONSTRAINT "letters_pkey" PRIMARY KEY (id))')

      client.query('CREATE TABLE public.clinicians( ' +
      'clinician_id text NOT NULL, ' +
      'password_hash text, ' +
      'id serial, ' +
      'CONSTRAINT "clinicians_pkey" PRIMARY KEY (clinician_id))')

      client.query('CREATE TABLE public.clinicians_patients( ' +
      'clinician_id text NOT NULL, ' +
      'patient_id text NOT NULL, ' +
      'id serial, ' +
      'CONSTRAINT "clinicians_patients_pkey" PRIMARY KEY (clinician_id, patient_id))')
    }
    done()
  })
}
