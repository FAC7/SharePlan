import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ClientList from '../../components/ClinicianDashboard/ClientList/index.js'
import AddClientForm from '../../components/AddClient/index.js'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

export default class ClinicianDashboard extends React.Component {

  constructor () {
    super()
    this.state = {
      clients: [],
      showModal: false
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
    this.setState({
      clients: this.getClients()
    })
    this.toggleModal = this.toggleModal.bind(this)
  }

  // getClients() will be an axios request to access all previous clients this clinician has dealth with?
  getClients () {
    return this.props.clients
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
  clients: React.PropTypes.array
}

ClinicianDashboard.defaultProps = {
  currentUser: 'katbow',
  clients: [
    {
      id: 54634563456,
      letters: [
        {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'Sent',
          due: '10/11/16'
        }, {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'Waiting review',
          due: '10/11/16'
        },
        {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'On the list',
          due: '10/11/16'
        }
      ]
    },
    {
      id: 1324523452345,
      letters: [
        {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'On the list',
          due: '10/11/16'
        }, {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'Sent',
          due: '10/11/16'
        },
        {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'Waiting review',
          due: '10/11/16'
        }
      ]
    },
    {
      id: 24356345766,
      letters: [
        {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'Sent',
          due: '10/11/16'
        }, {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'On the list',
          due: '10/11/16'
        },
        {
          topic: 'Assessment results',
          recipients: [
            'School'
          ],
          correspondence: [
            'patient', "patient's mum", 'school'
          ],
          status: 'Waiting review',
          due: '10/11/16'
        }
      ]
    }
  ]
}
