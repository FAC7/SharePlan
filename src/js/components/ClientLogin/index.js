import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import SignupPanel from './signupPanel.js'
import LoginPanel from './loginPanel.js'

export default class Login extends Component {
  render () {
    return (
      <Modal show={this.props.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Letter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupPanel />
          <LoginPanel />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

Login.propTypes = {
  showModal = React.PropTypes.func
}
