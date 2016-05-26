import React, { Component } from 'react'
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'

export default class StatusInput extends Component {
  render () {
    return (
      <FormGroup controlId='formHorizontalEmail'>
        <Col componentClass={ControlLabel} sm={2}>
          Status {this.props.num + 1}
        </Col>
        <Col sm={9}>
          <FormControl type='text' placeholder='e.g. In progress' onChange={this.props.handleChange}/>
        </Col>
      </FormGroup>
    )
  }
}
