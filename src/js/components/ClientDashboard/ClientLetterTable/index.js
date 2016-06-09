import React from 'react'
import { Table, thead, th, td, tr, tbody, Glyphicon, Row, Col } from 'react-bootstrap'

export default class ClientLetterTable extends React.Component {
  constructor () {
    super()
    this.colorText = this.colorText.bind(this)
    this.colorBox = this.colorBox.bind(this)
  }

  colorText (letterStatus, displayStatus) {
    return displayStatus === letterStatus ? 'active-state' : ''
  }

  colorBox (letterStatus, displayStatus) {
    return displayStatus === letterStatus ? 'active-box status' : 'status'
  }

  render () {
    return (
      <div className='client-letter-table'>
        {this.props.activeLetters.length > 0
          ? <div>
            <h2>Pending Letters</h2>
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
                          {letter.topic}
                        </td>
                        <td>
                         {letter.recipient}
                        </td>
                        <td>
                          <Row>
                            <Col className={this.colorBox(letter.status, 'On the list')} xs={2}>
                              <p className={this.colorText(letter.status, 'On the list')}>
                                On the list
                              </p>
                            </Col>
                            <Col xs={1}>
                              <Glyphicon className='arrow-right' glyph='chevron-right' />
                            </Col>
                            <Col className={this.colorBox(letter.status, 'In progress')} xs={2}>
                              <p className={this.colorText(letter.status, 'In progress')}>
                                In progress
                              </p>
                            </Col>
                            <Col xs={1}>
                              <Glyphicon className='arrow-right' glyph='chevron-right' />
                            </Col>
                            <Col className={this.colorBox(letter.status, 'Sent')} xs={3}>
                              <p className={this.colorText(letter.status, 'Sent')}>
                                Sent
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    ) })
                  }
                </tbody>
              </Table>
            </div>
          </div>
           : ''
         }
        {this.props.sentLetters.length !== 0
          ? <div className='sent-letters'>
            <h2>Sent Letters</h2>
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
                  </tr>
                </thead>
                <tbody>

                {this.props.sentLetters.map((letter, i) => {
                  return (
                    <tr key={i}>
                      <td>
                         {letter.topic}
                      </td>
                      <td>
                        {letter.recipient}
                      </td>
                    </tr>
                    ) }
                  )}
                </tbody>
              </Table>
            </div>
          </div>
      : ''}
      </div>
  )
  }
}

ClientLetterTable.propTypes = {
  activeLetters: React.PropTypes.array,
  sentLetters: React.PropTypes.array
}
