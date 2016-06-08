import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import axios from 'axios'

import DefaultButton from '../Button/'

const styles = {
  rows: {
    padding: '5px'
  }
}

export default class SignupPanel extends Component {
  constructor () {
    super()
    this.state = {
      patient_id: '',
      clinician_id: '',
      first_name: '',
      last_name: '',
      email: '',
      mobile_number: '',
      password_hash: '',
      invalid_username: false,
      invalid_password: false,
      missing_field: false,
      invalid_email: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick () {
    const url = this.props.userType === 'client' ? '/signup-patient' : 'signup-clinician'
    const client_id = this.props.userType === 'client' ? 'patient_id' : 'clinician_id'
    axios.post(url, {
      [client_id]: this.state[client_id],
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      mobile_number: this.state.mobile_number,
      password_hash: this.state.password_hash
    })
    .then((response) => {
      switch (response.data) {
        case 'invalid username':
          this.setState({ invalid_username: true })
          break
        case 'invalid password':
          this.setState({ invalid_password: true })
          break
        case 'missing required field':
          this.setState({ missing_field: true })
          break
        case 'invalid email':
          this.setState({ invalid_email: true })
          break
        default:
          browserHistory.push(this.props.userType === 'client' ? '/client-dashboard' : 'clinician-dashboard')
      }
    })
    .catch((response) => {
      console.log(response)
    })
  }

  handleChange (inputType, inputValue) {
    this.setState({ [inputType]: inputValue })
  }

  render () {
    let userType
    let client_id
    if (this.props.userType === 'client') {
      userType = 'Patient'
      client_id = 'patient_id'
    } else {
      userType = 'Clinician'
      client_id = 'clinician_id'
    }

    return (
      <div className='signup-split-panel'>
        <Row style={styles.rows}>
          <Col sm={4}>
            <label className='signup-form-label'>First Name</label>
          </Col>
          <Col sm={8}>
            <input name='first_name' className='signup-input' type='text' onChange={(e) => {
              return this.handleChange('first_name', e.target.value)
            }}
            required />
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col smOffset={4} sm={8}>
            {this.state.missing_field ? <p>This field is required</p> : ''}
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col sm={4}>
            <label className='signup-form-label'>Last Name</label>
          </Col>
          <Col sm={8}>
            <input name='last_name' className='signup-input' type='text' onChange={(e) => {
              return this.handleChange('last_name', e.target.value)
            }}
            required/>
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col smOffset={4} sm={8}>
            {this.state.missing_field ? <p>This field is required</p> : ''}
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col sm={4}>
            <label className='signup-form-label'>{userType} ID</label>
          </Col>
          <Col sm={8}>
            <input name={client_id} className='signup-input' type='text' onChange={(e) => {
              return this.handleChange(client_id, e.target.value)
            }}
            required/>
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col smOffset={4} sm={8}>
            {this.state.invalid_username ? <p>Invalid Username</p> : ''}
          </Col>
        </Row>
        {this.props.userType === 'client'
        ? <Row style={styles.rows}>
          <Col sm={4}>
            <label className='signup-form-label'>Email</label>
          </Col>
          <Col sm={8}>
            <input name='email' className='signup-input' type='text' onChange={(e) => {
              return this.handleChange('email', e.target.value)
            }}
            required/>
          </Col>
        </Row> : ''
        }
        <Row style={styles.rows}>
          <Col smOffset={4} sm={8}>
            {this.state.invalid_email ? <p>Invalid Email</p> : ''}
          </Col>
        </Row>
        { this.props.userType === 'client'
        ? <Row style={styles.rows}>
          <Col sm={4}>
            <label className='signup-form-label'>Mobile Number</label>
          </Col>
          <Col sm={8}>
            <input name='mobile_number' className='signup-input' type='text' onChange={(e) => {
              return this.handleChange('mobile_number', e.target.value)
            }}
            required/>
          </Col>
        </Row> : ''
        }
        <Row style={styles.rows}>
          <Col smOffset={4} sm={8}>
            {this.state.missing_field ? <p>This field is required</p> : ''}
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col sm={4}>
            <label className='signup-form-label'>Password</label>
          </Col>
          <Col sm={8}>
            <input name='password_hash' type='password' className='signup-input' onChange={(e) => {
              return this.handleChange('password_hash', e.target.value)
            }}
            required/>
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col smOffset={4} sm={8}>
            {this.state.invalid_password ? <p>Invalid Password</p> : ''}
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
          <Col smOffset={4} sm={8}>
            <DefaultButton buttonName='Sign Up' handleClick={this.handleClick}/>
          </Col>
        </Row>
      </div>
    )
  }
}

SignupPanel.propTypes = {
  userType: React.PropTypes.string
}
