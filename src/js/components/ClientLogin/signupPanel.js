import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import DefaultButton from '../Button/'

const styles = {
  rows: {
    padding: '5px'
  }
}

export default class SignupPanel extends Component {
  render () {
    return (
      <div className='signup-split-panel'>
        <form action='/addpatient' method='POST' >
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>First Name</label>
            </Col>
            <Col sm={8}>
              <input name='first_name' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Last Name</label>
            </Col>
            <Col sm={8}>
              <input name='last_name' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Patient ID</label>
            </Col>
            <Col sm={8}>
              <input name='patient_id' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Email</label>
            </Col>
            <Col sm={8}>
              <input name='email' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Mobile Number</label>
            </Col>
            <Col sm={8}>
              <input name='mobile_number' className='signup-input' type='text' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Password</label>
            </Col>
            <Col sm={8}>
              <input name='password_hash' type='password' className='signup-input' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Confirm Password</label>
            </Col>
            <Col sm={8}>
              <input name='password_confirm' type='password' className='signup-input' required/>
            </Col>
          </Row>
          <Row style={styles.rows}>
            <Col smOffset={5} sm={4}>
              <input className='btn-primary btn-lg btn' type='submit'/>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}
