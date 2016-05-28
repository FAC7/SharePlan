import React from 'react'
import { Modal, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import axios from 'axios'
import cookie from 'react-cookie'
import RecipientInput from './recipientInput.js'
import StatusInput from './statusInput.js'

export default class AddClient extends React.Component {
  constructor () {
    super()
    this.state = {
      inputList: [],
      statusList: [ 'status' ],
      formContent: {
        topic: '',
        recipient: '',
        patient_id: '',
        status: '',
        possible_statuses: {},
      },
    }
    this.addRecipient = this.addRecipient.bind(this)
    this.addStatusInput = this.addStatusInput.bind(this)
    this.formChange = this.formChange.bind(this)
    this.addFormStatus = this.addFormStatus.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }

  addRecipient () {
    const inputList = this.state.inputList
    this.setState({
      inputList: inputList.concat(<RecipientInput />)
    })
  }

  addStatusInput () {
    this.setState({
      statusList: this.state.statusList.concat('status')
    })
  }

  formChange (property, e) {
    this.setState({
      formContent: {
        ...this.state.formContent,
        [property]: e.target.value
      }
    })
  }

  addFormStatus (index, e) {
    this.setState({
      formContent: {
        ...this.state.formContent,
        possible_statuses: {
          ...this.state.formContent.possible_statuses,
          [index+1]: e.target.value,
        }
      }
    })
  }

  submitItem () {
    axios.post('/add-new-letter', {
      ...this.state.formContent,
      clinician_id: cookie.load('clinician_id'),
      date_created: Date.now()
    })
    .then((response) => {
      console.log(response)
      this.props.toggleModal()
      this.setState({
        statusList: [ 'status' ],
        formContent: {
          topic: '',
          recipient: '',
          patient_id: '',
          status: '',
          possible_statuses: {},
        }
      })
    })
  }

  render () {
    console.log(this.state.formContent)
    return (
      <div className='modal-container' style={{ height: 200 }}>
        <Button
          bsStyle='primary'
          bsSize='large'
          onClick={this.props.toggleModal}
        >
          Add New Item
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
                <Col sm={9}>
                  <FormControl type='text' placeholder='e.g. FO04835382' onChange={this.formChange.bind(null, 'patient_id')}/>
                </Col>
              </FormGroup>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Topic
                </Col>
                <Col sm={9}>
                  <FormControl type='text' placeholder='e.g. March Assessment' onChange={this.formChange.bind(null, 'topic')} />
                </Col>
              </FormGroup>
              {this.state.statusList.map((el, i) => {
                return <StatusInput key={i} num={i} handleChange={this.addFormStatus.bind(null, i)}/>
              })}
              <Col smOffset={8} sm={3}>
                <Button bsStyle='primary' onClick={this.addStatusInput}>
                  Add Another Status
                </Button>
              </Col>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Recipient(s)
                </Col>
                <Col sm={9}>
                  <FormControl type='text' placeholder='e.g. School, Hospital, Parents' onChange={this.formChange.bind(null, 'recipients')}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle='primary' onClick={this.submitItem}>
                    Submit
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
