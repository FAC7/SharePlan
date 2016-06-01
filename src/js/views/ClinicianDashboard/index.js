import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

import ClientList from '../../components/ClinicianDashboard/ClientList/index.js'
import AddClient from '../../components/AddClient/index.js'

export default class ClinicianDashboard extends React.Component {

  constructor () {
    super()
    this.state = {
      clients: {},
      showModal: false,
      clinician_id: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.getClients = this.getClients.bind(this)
  }

  componentWillMount () {
    if (cookie.load('clinician_id')) {
      this.setState({ clinician_id: cookie.load('clinician_id') })
    } else {
      browserHistory.push('/')
    }
  }

  componentDidMount () {
    this.getClients()
  }

  getClients () {
    axios.get('/get-all-patients-letters', {
      params: {
        clinician_id: this.state.clinician_id
      }
    })
    .then((response) => {
      const clientsObj = response.data.reduce((clientObj, letter) => {
        const id = letter.patient_id
        clientObj[id] = clientObj[id] ? clientObj[id].concat(letter) : [ letter ]
        return clientObj
      }, {})

      this.setState({ clients: clientsObj })
    })
    .catch((response) => {
      console.log(response)
    })
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <Grid>
        <Row>
          <AddClient toggleModal={this.toggleModal} showModal={this.state.showModal} getClients={this.getClients}/>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <ClientList {...this.props} clients={this.state.clients}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

ClinicianDashboard.propTypes = {
  currentUser: React.PropTypes.string,
  clients: React.PropTypes.object
}
