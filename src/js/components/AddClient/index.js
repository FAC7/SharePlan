import React from 'react'
import { Modal, Button, Col } from 'react-bootstrap'

export default class AddClient extends React.Component {

  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Add a Patient
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
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
          <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
