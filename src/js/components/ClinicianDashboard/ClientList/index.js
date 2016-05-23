import React from 'react'
import { Accordion, Panel, ProgressBar, Row, Col } from 'react-bootstrap'
import LetterTable from '../LetterTable/index.js'

export default class ClientList extends React.Component {

  trackProgress (letters) {
    const total = letters.length
    const complete = letters.filter((letter) => {
      return letter.status === 'Sent'
    }).length
    const progressString = complete.toString() + '/'+ total.toString() + ' letters sent'
    const progressNumber = complete/total * 100
    return [ progressString, progressNumber ]
  }

  render () {
    return (
      <Accordion>
          {this.props.clients.map((client, i) => {
            return (
              <Panel
                header={
                  <Row>
                    <Col xs={3}>
                      <p>{client.id}</p>
                    </Col>
                    <Col xs={6}>
                      <ProgressBar active bsStyle='info' now={this.trackProgress(client.letters)[1]}/>
                    </Col>
                    <Col xs={3}>
                      <p> {this.trackProgress(client.letters)[0]} </p>
                    </Col>
                  </Row>
                }
                eventKey={i}
                key={i}
              >
                <LetterTable letters={client.letters}/>
              </Panel>
              )
          })}
      </Accordion>
    )
  }
}
