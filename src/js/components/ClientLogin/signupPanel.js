import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import DefaultButton from '../Button/'

export default class SignupPanel extends Component {
  render () {
    return (
      <div className='signup-split-panel'>
        <form>
          <Row>
            <Col sm={3}>
              <label className='sigup-form-label'>First Name</label>
            </Col>
            <Col sm={9}>
              <input className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <label className='signup-form-label'>Last Name</label>
            </Col>
            <Col sm={9}>
              <input className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <label className='signup-form-label'>Patient ID</label>
            </Col>
            <Col sm={9}>
              <input className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <label className='signup-form-label'>Email</label>
            </Col>
            <Col sm={9}>
              <input className='signup-input' type='text'/>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <label className='signup-form-label'>Mobile Number</label>
            </Col>
            <Col sm={9}>
              <input className='signup-input' type='text'/>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <label className='signup-form-label'>Password</label>
            </Col>
            <Col sm={9}>
              <input type='password' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <label className='signup-form-label'>Confirm Password</label>
            </Col>
            <Col sm={9}>
              <input type='password' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row>
            <Col smOffset={4} sm={4}>
              <DefaultButton buttonName='Sign Up'/>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}
