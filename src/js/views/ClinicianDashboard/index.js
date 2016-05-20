import React from 'react'
import ClientList from '../../components/ClinicianDashboard/ClientList/index.js'
import AddClientForm from '../../components/AddClient/index.js'

export default class ClinicianDashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {

    return (
      <div>
        <AddClientForm toggleModal={this.toggleModal} showModal={this.state.showModal}/>
        <ClientList />
      </div>
    )
  }
}
