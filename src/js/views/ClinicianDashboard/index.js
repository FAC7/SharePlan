import React from 'react'
import DefaultButton from '../../components/Button/'
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
  onLogout () {
    cookie.remove('clinician_id', { path: '/' })
    cookie.remove('patient_id', { path: '/' })
    browserHistory.push('/')
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
    this.setState({
      filter: input
    })
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <Grid>

        <Row>
          <Col xs={2} xsOffset={1}>
            <div className='header-buttons'>
              <Row>
                <h4>Add a Letter to a Client</h4>
              </Row>
              <Row>
                <AddClient
                  toggleModal={this.toggleModal}
                  showModal={this.state.showModal}
                  getClients={this.getClients}
                />
              </Row>
            </div>
          </Col>
          <Col xs={4} xsOffset={1} >
            <form className='search-bar-container'>
              <FormGroup controlId='formControlsText'>
                <Row>
                  <ControlLabel><h4>Search for Patients</h4></ControlLabel>
                </Row>
                <div className='search-bar'>
                  <FormControl
                    onChange={this.handleChange.bind(this)}
                    type='text' placeholder='Search by Patient ID'
                  />
                </div>
              </FormGroup>
            </form>
          </Col>
          <Col xs={2} xsOffset={1}>
            <div className='header-buttons'>
              <Row>
                <h4> Logged in as {this.state.clinician_id} </h4>
              </Row>
              <Row>
                <DefaultButton buttonName='Log Out' handleClick={this.onLogout}/>
              </Row>
            </div>
          </Col>
          <Col xs={1}>
            <div className='clinician-dashboard-logo'>
              <img className='logo' src='/img/logo.png'/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <div className='client-list-container'>
              <ClientList {...this.props} filter={this.state.filter} clients={this.state.clients}/>
            </div>
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
