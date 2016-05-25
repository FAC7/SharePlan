import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import axios from 'axios'
import cookie from 'react-cookie'

import DefaultButton from '../Button/'

const styles = {
  rows: {
    padding: '5px'
  }
}

export default class LoginPanel extends Component {
  constructor () {
    super()
    this.state = {
      patient_id: '',
      password_hash: '',
      incorrectPassword: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick () {
    axios.post('/login-patient', {
      patient_id: this.state.patient_id,
      password_hash: this.state.password_hash
    })
    .then((response) => {
      console.log(response.data)
      if (response.data === 'incorrect password') {
        this.setState({ incorrectPassword: true })
      } else {
        cookie.save('patient_id', this.state.patient_id, { path: '/' })
        browserHistory.push('/clinician-dashboard')
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
    console.log(this.state)
    return (
      <div className='login-split-panel'>
        <Row style={styles.rows}>
          <Col sm={3}>
            <label className='signup-form-label'>Patient ID</label>
          </Col>
          <Col sm={9}>
            <input className='signup-input' type='text' name='patient_id' onChange={(e) => this.handleChange('patient_id', e.target.value)} required/>
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col sm={3}>
            <label className='signup-form-label'>Password</label>
          </Col>
          <Col sm={9}>
            <input type='password' className='signup-input' name='password_hash' onChange={(e) => this.handleChange('password_hash', e.target.value)} required/>
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col sm={9}>
            {this.state.incorrectPassword ? <p>Incorrect Patient ID or Password</p> : ''}
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col smOffset={4} sm={4}>
            <DefaultButton buttonName='Login' handleClick={this.handleClick}/>
          </Col>
        </Row>
      </div>
    )
  }
}
