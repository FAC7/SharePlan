import React from 'react'
import ClientLetterTable from '../../components/ClientDashboard/ClientLetterTable/index.js'
import { Row, Col, Grid } from 'react-bootstrap'

export default class ClientDashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      filterActiveLetters: this.filterActiveLetters.bind(this),
      filterSentLetters: this.filterSentLetters.bind(this)
    }
  }

  filterActiveLetters () {
    return this.props.letters.filter((letter) => {
      console.log(letter.status)
      return letter.status !== 'Sent'
    })
  }

  filterSentLetters (status) {
    return this.props.letters.filter((letter) => {
      return letter.status === 'Sent'
    })
  }

  render () {
    return (
    <Grid>
      <Row>
        <Col xs={10} xsOffset={1}>
        <ClientLetterTable sentLetters={this.filterSentLetters('Sent')} activeLetters={this.filterActiveLetters()} />
        </Col>
      </Row>
    </Grid>
    )
  }
}

ClientDashboard.propTypes = {
  letters: React.PropTypes.array
}

ClientDashboard.defaultProps = {
  letters: [
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
    },
    {
      topic: 'Assessment results',
      recipients: [
        'School'
      ],
      correspondence: [
        'patient', "patient's mum", 'school'
      ],
      status: 'In preparation',
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
      status: 'In preparation',
      due: '10/11/16'
    }

  ]
}
