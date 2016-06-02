import React from 'react'
import { Modal, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import axios from 'axios'
import cookie from 'react-cookie'
import RecipientInput from './recipientInput.js'
import DefaultButton from '../Button/index.js'

export default class AddClient extends React.Component {
  constructor () {
    super()
    this.state = {
      inputList: [],
      formContent: {
        topic: '',
        recipient: '',
        patient_id: '',
        possible_statuses: {
          1: 'On the list',
          2: 'In progress',
          3: 'Sent'
        }
      }
    }
    this.addRecipient = this.addRecipient.bind(this)
    this.formChange = this.formChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }

  addRecipient () {
    const inputList = this.state.inputList
    this.setState({
      inputList: inputList.concat(<RecipientInput />)
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

  submitItem () {
    axios.post('/add-new-letter', {
      ...this.state.formContent,
      clinician_id: cookie.load('clinician_id'),
      date_created: Date.now()
    })
    .then((response) => {
      console.log('ADD CLIENT RESPONSE', response)
      this.props.toggleModal()
      this.props.getClients()
      this.setState({
        formContent: {
          topic: '',
          recipient: '',
          patient_id: '',
          possible_statuses: {
            1: 'On the list',
            2: 'In progress',
            3: 'Sent'
          }
        }
      })
    })
  }

  render () {
    return (
      <div className='modal-container'>
        <DefaultButton buttonName='Add Letter'
          handleClick={this.props.toggleModal}
        />
        <Modal
          show={this.props.showModal}
          onHide={this.props.toggleModal}
          bsSize={'lg'}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title'>Add Patient Letter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Patient ID
                </Col>
                <Col sm={9}>
                  <FormControl
                    type='text'
                    placeholder='e.g. FO04835382'
                    onChange={this.formChange.bind(null, 'patient_id')}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Topic
                </Col>
                <Col sm={9}>
                  <FormControl
                    type='text'
                    placeholder='e.g. March Assessment'
                    onChange={this.formChange.bind(null, 'topic')}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Recipient(s)
                </Col>
                <Col sm={9}>
                  <FormControl
                    type='text'
                    placeholder='e.g. School, Hospital, Parents'
                    onChange={this.formChange.bind(null, 'recipient')}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <DefaultButton buttonName='Submit' handleClick={this.submitItem}/>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <DefaultButton buttonName='Close' handleClick={this.props.toggleModal}/>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

AddClient.propTypes = {
  showModal: React.PropTypes.bool,
  toggleModal: React.PropTypes.func,
  getClients: React.PropTypes.func
}
