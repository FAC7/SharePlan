import React from 'react'
import { Modal, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export default class AddClient extends React.Component {

  render() {
    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.props.toggleModal}
        >
          Add a Patient
        </Button>

        <Modal
          show={this.props.showModal}
          onHide={this.props.toggleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Client Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  First Name
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Last Name
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Phone Number
                </Col>
                <Col sm={10}>
                  <FormControl type="number" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Add
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
