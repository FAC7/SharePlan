import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import axios from 'axios'
// import cookie from 'react-cookie'

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
      clinician_id: '',
      password_hash: '',
      incorrectPassword: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick () {
    const url = this.props.userType === 'client' ? '/login-patient' : '/login-clinician'
    console.log(url)
    const client_id = this.props.userType === 'client' ? 'patient_id' : 'clinician_id'
    console.log(client_id)
    axios.post(url, {
      [client_id]: this.state[client_id],
      password_hash: this.state.password_hash
    })
    .then((response) => {
      console.log(response.data)
      if (response.data === 'incorrect password') {
        this.setState({ incorrectPassword: true })
      } else {
        // cookie.save(client_id, this.state[client_id], { path: '/' })
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
    const clientType = this.props.userType === 'client' ? 'Patient' : 'Clinician'
    const id = this.props.userType === 'client' ? 'patient_id' : 'clinician_id'
    return (
      <div className='login-split-panel'>
        <Row style={styles.rows}>
          <Col sm={3}>
            <label className='signup-form-label'>{clientType} ID</label>
          </Col>
          <Col sm={9}>
            <input className='signup-input' type='text' name={id}
              onChange={(e) => this.handleChange(id, e.target.value)}
              required
            />
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
          <Col smOffset={2} sm={9}>
            {this.state.incorrectPassword ? <p>Incorrect {clientType} ID or Password</p> : ''}
          </Col>
        </Row>
        <Row style={styles.rows}>
          <Col smOffset={3} sm={9}>
            <DefaultButton buttonName='Login' handleClick={this.handleClick}/>
          </Col>
        </Row>
        <Row>
          <Col smOffset={4} sm={8}>
            <div className={this.props.userType === 'client'
            ? 'image-container patient-image' : 'image-container'}>
              <img className='logo' src='/img/logo.png' />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

LoginPanel.propTypes = {
  userType: React.PropTypes.string
}
