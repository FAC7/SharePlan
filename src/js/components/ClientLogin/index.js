import React, { Component } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'

import SignupPanel from './signupPanel.js'
import LoginPanel from './loginPanel.js'
import DefaultButton from '../Button/'

export default class Login extends Component {
  render () {
    return (
      <Modal bsSize={'lg'} show={this.props.showModal} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Row>
              <Col sm={6}>
                Sign Up
              </Col>
              <Col sm={5}>
                Login
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <SignupPanel userType={this.props.userType} />
            </Col>
            <Col sm={6}>
              <LoginPanel userType={this.props.userType}/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <DefaultButton handleClick={this.props.toggleModal} buttonName='Close'/>
        </Modal.Footer>
      </Modal>
    )
  }
}

Login.propTypes = {
  showModal: React.PropTypes.bool,
  toggleModal: React.PropTypes.func,
  userType: React.PropTypes.string
}
