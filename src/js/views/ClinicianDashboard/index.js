import React from 'react'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
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
      console.log('response from /get-all-patients-letters request, ClinicianDashboard line 39',
      response)
      console.log('clinician_id, ClinicianDashboard line 40', this.state.clinician_id)

      const clientsObj = response.data.reduce((clientObj, letter) => {
        const id = letter.patient_id
        clientObj[id] = clientObj[id] ? clientObj[id].concat(letter) : [ letter ]
        return clientObj
      }, {})

      this.setState({
        fullClientsObj: clientsObj,
        clients: clientsObj
      })
    })
    .catch((response) => {
      console.log(response)
    })
  }

  handleChange (e) {
    const input = e.target.value
    const fullClientsObj = this.state.fullClientsObj
    const filteredList = Object.keys(fullClientsObj).filter((client_id) => {
      return client_id.indexOf(input) > -1
    })

    const newClientObject = {}
    filteredList.forEach((clientId) => {
      newClientObject[clientId] = this.state.fullClientsObj[clientId]
    })
    this.setState({
      clients: newClientObject
    })
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <Grid>
        <Row>
          <form>
            <FormGroup controlId='formControlsText'>
              <ControlLabel>Search for patients</ControlLabel>
              <FormControl
                onChange={this.handleChange.bind(this)}
                type='text' placeholder='Search by Patient ID'
              />
            </FormGroup>
          </form>
        </Row>
        <Row>
          <AddClient toggleModal={this.toggleModal} showModal={this.state.showModal}/>
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
