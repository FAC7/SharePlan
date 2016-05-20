import React from 'react'
import ClientList from '../../components/ClinicianDashboard/ClientList/index.js'
import AddClientForm from '../../components/AddClient/index.js'

export default class ClinicianDashboard extends React.Component {

  render () {

    return (
      <div>
        <AddClientForm />
        <ClientList />
      </div>
    )
  }
}
