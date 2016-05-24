import React, { Component } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'

import SignupPanel from './signupPanel.js'
import LoginPanel from './loginPanel.js'

export default class Login extends Component {
  render () {
    return (
      <Modal bsSize={'lg'} show={this.props.showModal} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up or Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}><SignupPanel /></Col>
            <Col sm={6}><LoginPanel /></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

Login.propTypes = {
  showModal: React.PropTypes.bool,
  toggleModal: React.PropTypes.func
}
