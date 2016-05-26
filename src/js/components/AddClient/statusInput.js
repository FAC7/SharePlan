import React, { Component } from 'react'
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'

export default class StatusInput extends Component {
  render () {
    return (
      <FormGroup controlId='formHorizontalEmail'>
        <Col componentClass={ControlLabel} sm={1}>
          Status {this.props.num + 1}
        </Col>
        <Col sm={5}>
          <FormControl type='text' placeholder='Status' />
        </Col>
      </FormGroup>
    )
  }
}
