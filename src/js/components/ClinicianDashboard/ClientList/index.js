import React from 'react'
import { Accordion, Panel, Row, Col } from 'react-bootstrap'
import LetterTable from '../LetterTable/index.js'

export default class ClientList extends React.Component {

  trackProgress (letters) {
    const total = letters.length
    const complete = letters.filter((letter) => {
      return letter.status === 'Sent'
    }).length
    const progressString = complete.toString() + ' out of ' + total.toString() + ' Letters Sent'
    return progressString
  }

  render () {
    return (
      <Accordion>
        {Object.keys(this.props.clients).map((patientID, i) => {
          return (
            <Panel
              key={i}
              eventKey={i.toString()}
              header={
                <Row>
                  <Col xs={2} xsOffset={1}>
                    <p><strong>Patient ID:</strong></p>
                  </Col>
                  <Col xs={2}>
                    <p>{patientID}</p>
                  </Col>
                  <Col xs={4} xsOffset={2}>
                    <p>{this.trackProgress(this.props.clients[patientID])}</p>
                  </Col>
                </Row>
              }
            >
              <LetterTable letters={this.props.clients[patientID]}/>
            </Panel>
          )
        })}
      </Accordion>
    )
  }
}

ClientList.propTypes = {
  clients: React.PropTypes.object
}
