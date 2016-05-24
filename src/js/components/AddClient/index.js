import React from 'react'
import { Modal, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

import RecipientInput from './recipientInput.js'

export default class AddClient extends React.Component {
  constructor () {
    super()
    this.state = {
      inputList: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const inputList = this.state.inputList
    this.setState({
      inputList: inputList.concat(<RecipientInput />)
    })
  }

  render () {
    return (
      <div className='modal-container' style={{height: 200}}>
        <Button
          bsStyle='primary'
          bsSize='large'
          onClick={this.props.toggleModal}
        >
          Add New Patient Letters
        </Button>

        <Modal
          show={this.props.showModal}
          onHide={this.props.toggleModal}
          bsSize={'lg'}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title'>Client Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Patient ID
                </Col>
                <Col sm={10}>
                  <FormControl type='email' placeholder='Patient ID' />
                </Col>
              </FormGroup>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type='email' placeholder='Email' />
                </Col>
              </FormGroup>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Mobile Number
                </Col>
                <Col sm={10}>
                  <FormControl type='email' placeholder='Mobile Number' />
                </Col>
              </FormGroup>
              <RecipientInput />
              <Col smOffset={9} sm={3}>
                <Button bsStyle='primary' onClick={this.handleClick}>
                  Add New Recipient
                </Button>
              </Col>
              {this.state.inputList.map((input, index) => {
                return input
              })}
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle='primary' type='submit'>
                    Add Patient Details
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

AddClient.propTypes = {
  showModal: React.PropTypes.bool,
  toggleModal: React.PropTypes.func
}
