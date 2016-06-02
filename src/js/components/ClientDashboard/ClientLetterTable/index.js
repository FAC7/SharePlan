import React from 'react'
import { Table, thead, th, td, tr, tbody, Button, Glyphicon, Row, Col } from 'react-bootstrap'

export default class ClientLetterTable extends React.Component {
  constructor () {
    super()
    this.colorText = this.colorText.bind(this)
  }

  colorText (letterStatus, displayStatus) {
    return displayStatus === letterStatus ? 'active-state' : ''
  }

  render () {
    return (
      <div>
        {this.props.activeLetters ?
          <div className='client-table'>
            <Table responsive className='client-heading'>
              <thead>
                <tr>
                  <th>
                    Topic
                  </th>
                  <th>
                    Recipients
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.activeLetters.map((letter, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Button bsStyle='link'>
                          {letter.topic}
                        </Button>
                      </td>
                      <td>
                       {letter.recipient}
                      </td>
                      <td>
                        <Row>
                          <Col className='arrow-status' xs={2}>
                            <p className={this.colorText(letter.status, 'On the list')}>
                              On the list
                            </p>
                          </Col>
                          <Col className='arrow-status' xs={2}>
                            <p className={this.colorText(letter.status, 'In progress')}>
                              In progress
                            </p>
                          </Col>
                          <Col xs={1}>
                            <Glyphicon className='arrow-right' glyph='chevron-right' />
                          </Col>
                          <Col xs={3}>
                            <p className={this.colorText(letter.status, 'Sent')}>
                              Sent
                            </p>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )})
                }
              </tbody>
            </Table>
          </div>
           : ''
         }
        {this.props.sentLetters ?
          <div className='client-table'>
            <Table responsive className='client-heading'>
              <thead>
              <div>
                <tr>
                  <th>
                    Topic
                  </th>
                  <th>
                    Recipients
                  </th>
                </tr>
                </div>
              </thead>
              <tbody>

                {this.props.sentLetters.map((letter, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Button bsStyle='link'>
                         {letter.topic}
                        </Button>
                      </td>
                      <td>
                        {letter.recipient}
                      </td>
                    </tr>
                    )}
                  )}
              </tbody>
            </Table>
          </div> : ''}
      </div>
    )
  }
}

ClientLetterTable.propTypes = {
  activeLetters: React.PropTypes.array,
  sentLetters: React.PropTypes.array
}
