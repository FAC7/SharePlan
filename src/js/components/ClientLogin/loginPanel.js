import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import DefaultButton from '../Button/'

export default class LoginPanel extends Component {
  render () {
    return (
      <div className='login-split-panel'>
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
            <label className='signup-form-label'>Password</label>
          </Col>
          <Col sm={9}>
            <input type='password' className='signup-input' type='text' required/>
          </Col>
        </Row>
        <Row>
          <Col smOffset={4} sm={4}>
            <DefaultButton buttonName='Login'/>
          </Col>
        </Row>
      </div>
    )
  }
}
