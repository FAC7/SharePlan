import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

import ClientList from '../../components/ClinicianDashboard/ClientList/index.js'
import AddClientForm from '../../components/AddClient/index.js'

export default class ClinicianDashboard extends React.Component {

  constructor () {
    super()
    this.state = {
      clients: {},
      showModal: false,
      clinician_id: ''
    }
  }

  componentWillMount () {
    if (cookie.load('clinician_id')) {
      this.setState({ clinician_id: cookie.load('clinician_id') })
      // get all patient letters request here
    } else {
      browserHistory.push('/')
    }
  }

  componentDidMount () {
    this.getClients()
    this.toggleModal = this.toggleModal.bind(this)
  }

  // getClients() will be an axios request to access all previous clients this clinician has dealth with?
  getClients () {
    axios.get('/get-all-patients-letters', {
      params: {
        clinician_id: this.state.clinician_id
      }
    })
    .then((response) => {
      console.log(response)
      const realDataFormat = [{
        patient_id: 'jfewah8493',
        first_name: 'Kat',
        last_name: 'Bow',
        topic: 'some topic',
        recipient: 'Mum',
        status: 'sent',
        date_created: '2016-01-28'
      }, {
        patient_id: 'jfewah8493',
        first_name: 'Kat',
        last_name: 'Bow',
        topic: 'some topicssss',
        recipient: 'Mum',
        status: 'sent',
        date_created: '2016-01-28'
      }, {
        patient_id: 'jfewah9093',
        first_name: 'Kit',
        last_name: 'Bew',
        topic: 'some topic',
        recipient: 'Mum',
        status: 'sent',
        date_created: '2016-01-28'
      }]

      const clientArray = {}

      realDataFormat.forEach((letter) => {
        if (clientArray[letter.patient_id]) {
          clientArray[letter.patient_id].letters.push(letter)
        } else {
          clientArray[letter.patient_id] = {letters: [letter]}
        }
      })
      this.setState({ clinician_id: clientArray })
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
          <AddClientForm toggleModal={this.toggleModal} showModal={this.state.showModal}/>
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

ClinicianDashboard.defaultProps = {
  currentUser: 'katbow',
  clients: {
    54634563456: {
      letters: [
        {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'Sent',
          date_created: '10/11/16'
        }, {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'Waiting review',
          date_created: '10/11/16'
        },
        {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'On the list',
          date_created: '10/11/16'
        }
      ]
    },
    1324523452345: {
      letters: [
        {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'On the list',
          date_created: '10/11/16'
        }, {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'Sent',
          date_created: '10/11/16'
        },
        {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'Waiting review',
          date_created: '10/11/16'
        }
      ]
    },
    24356345766: {
      letters: [
        {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'Sent',
          date_created: '10/11/16'
        }, {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'On the list',
          date_created: '10/11/16'
        },
        {
          topic: 'Assessment results',
          recipient: 'School',
          status: 'Waiting review',
          date_created: '10/11/16'
        }
      ]
    }
  }
}
