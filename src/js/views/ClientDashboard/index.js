import React from 'react'
import ClientLetterTable from '../../components/ClientDashboard/ClientLetterTable/index.js'
import { browserHistory } from 'react-router'
import axios from 'axios'
import cookie from 'react-cookie'
import { Row, Col, Grid } from 'react-bootstrap'
import DefaultButton from '../../components/Button/'
import Footer from '../../components/Footer/index.js'

export default class ClientDashboard extends React.Component {

  constructor () {
    super()
    this.state = {
      patient_id: '',
      letters: []
    }
    this.filterActiveLetters = this.filterActiveLetters.bind(this)
    this.filterSentLetters = this.filterSentLetters.bind(this)
    this.getLetters = this.getLetters.bind(this)
  }

  componentWillMount () {
    if (cookie.load('patient_id')) {
      this.setState({ patient_id: cookie.load('patient_id') })
      // get patient letters request here
    } else {
      browserHistory.push('/')
    }
  }

  componentDidMount () {
    this.getLetters()
  }
  onLogout () {
    cookie.remove('clinician_id', { path: '/' })
    cookie.remove('patient_id', { path: '/' })
    browserHistory.push('/')
  }

  getLetters () {
    axios.get('/get-patient-letters', {
      patient_id: this.state.patient_id
    })
    .then(response => {
      this.setState({ letters: response.data })
    })
    .catch(response => {
      console.log(response)
    })
  }

  filterActiveLetters () {
    return this.state.letters.filter((letter) => {
      return letter.status !== 'Sent'
    })
  }

  filterSentLetters () {
    return this.state.letters.filter((letter) => {
      return letter.status === 'Sent'
    })
  }

  render () {
    return (
      <Grid>
        <Row className='logout'>
          <Col xs={2} xsOffset={8}>
            <h4>Logged in as: <strong>{this.state.patient_id}</strong></h4>
            <DefaultButton buttonName='Log Out' handleClick={this.onLogout}/>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <ClientLetterTable
              sentLetters={this.filterSentLetters()}
              activeLetters={this.filterActiveLetters()}
            />
          </Col>
        </Row>
        <Footer/>
      </Grid>
    )
  }
}

ClientDashboard.propTypes = {
  letters: React.PropTypes.array
}
