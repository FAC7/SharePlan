import React from 'react'
import { Accordion, Panel, Row, Col } from 'react-bootstrap'
import LetterTable from '../LetterTable/index.js'

export default class ClientList extends React.Component {

  trackProgress (letters) {
    const total = letters.length
    const complete = letters.filter((letter) => {
      return letter.status === 'Sent'
    }).length
    const progressString = complete.toString() + '/' + total.toString() + ' letters sent'
    return progressString
  }

  render () {
    return (
      <Accordion>
        {Object.keys(this.props.clients).map((patientID, i) => {
          return (
            <Panel
              header={
                <Row>
                  <Col xs={3}>
                    <p>{patientID}</p>
                  </Col>
                  <Col xs={6}/>
                  <Col xs={3}>
                    <p>{this.trackProgress(this.props.clients[patientID])}</p>
                  </Col>
                </Row>
              }
              key={i}
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

// {this.props.clients.map((client, i) => {
//   return (
//     <Panel
//       header={
//         <Row>
//           <Col xs={3}>
//             <p>{client.id}</p>
//           </Col>
//           <Col xs={6}>
//             <ProgressBar bsStyle='info' now={this.trackProgress(client.letters)[1]}/>
//           </Col>
//           <Col xs={3}>
//             <p> {this.trackProgress(client.letters)[0]} </p>
//           </Col>
//         </Row>
//       }
//       eventKey={i}
//       key={i}
//     >
//       <LetterTable letters={client.letters}/>
//     </Panel>
//     )
// })}
// </Accordion>
