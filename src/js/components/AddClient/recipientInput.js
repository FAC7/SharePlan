import React, { Component } from 'react'
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'

export default class RecipientInput extends Component {
  render () {
    return (
      <FormGroup controlId='formHorizontalEmail'>
        <Col componentClass={ControlLabel} sm={2}>
          Topic
        </Col>
        <Col sm={4}>
          <FormControl type='text' placeholder='Letter Topic' />
        </Col>
        <Col componentClass={ControlLabel} sm={1}>
          Recipient
        </Col>
        <Col sm={5}>
          <FormControl type='text' placeholder='Letter Recipient' />
        </Col>
      </FormGroup>
    )
  }
}
