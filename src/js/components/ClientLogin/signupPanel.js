import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const styles = {
  rows: {
    padding: '5px'
  }
}

export default class SignupPanel extends Component {
  render () {
    let action
    let userType
    let client_id
    if (this.props.userType === 'client') {
      action = '/signup-patient'
      userType = 'Patient'
      client_id = 'patient_id'
    } else {
      action = '/signup-clinician'
      userType = 'Clinician'
      client_id = 'clinician_id'
    }

    console.log(action, ' <<< action')

    return (
      <div className='signup-split-panel'>
        <form action={action} method='POST' >
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
              <label className='signup-form-label'>{userType} ID</label>
            </Col>
            <Col sm={8}>
              <input name={client_id} className='signup-input' type='text' required/>
            </Col>
          </Row>
          {this.props.userType === 'client'
          ? <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Email</label>
            </Col>
            <Col sm={8}>
              <input name='email' className='signup-input' type='text' required/>
            </Col>
          </Row> : ''
          }
          { this.props.userType === 'client'
          ? <Row style={styles.rows}>
            <Col sm={4}>
              <label className='signup-form-label'>Mobile Number</label>
            </Col>
            <Col sm={8}>
              <input name='mobile_number' className='signup-input' type='text' required/>
            </Col>
          </Row> : ''
          }
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

SignupPanel.propTypes = {
  userType: React.PropTypes.string
}
