import React from 'react'
import { td, tr, ProgressBar, DropdownButton, MenuItem, Button } from 'react-bootstrap'
import axios from 'axios'
export default class TableRow extends React.Component {
  constructor () {
    super()
    this.state = {
      buttonStatus: ''
    }
    this.changeStatus = this.changeStatus.bind(this)
    this.formatDate = this.formatDate.bind(this)
    this.postData = this.postData.bind(this)
  }
  componentWillMount () {
    this.setState({
      buttonStatus: this.props.status
    })
  }
  changeStatus (buttonStatus, date_created) {
    this.setState({
      buttonStatus: buttonStatus
    })
    this.postData(buttonStatus, date_created)
    this.props.getClients()
  }
  postData (letterStatus, date_created) {
    axios.post('/change-letter-status', {
      newStatus: letterStatus,
      date_created: date_created
    })
    .then((response) => {
      console.log(response)
    })
    .catch((response) => {
      console.log(response)
    })
  }
  formatDate (createdDate) {
    const d = new Date(+createdDate)
    let day = d.getDate()
    let month = d.getMonth()
    const year = d.getFullYear()
    day = day.toString().length === 1 ? '0' + day : day
    month = month.toString().length === 1 ? '0' + month : month
    const prettyDate = day + '/' + month + '/' + year
    return prettyDate
  }
  render () {
    const letterColor = {
      'On the list': 0,
      'In progress': 50,
      'Sent': 100
    }
    return (
      <tr key={this.props.index}>
        <td>
          {this.props.topic}
        </td>
        <td>{this.props.recipient}</td>
        <td>
          <ProgressBar
            bsStyle='warning' now={letterColor[this.state.buttonStatus]}
          />
        </td>
        <td>
          <DropdownButton
            bsStyle='info'
            title={this.state.buttonStatus}
            id={`dropdown-basic-${this.props.index}`}
          >
            <MenuItem
              eventKey='1'
              active={this.state.status === 'On the list'}
              onClick={this.changeStatus.bind(this, 'On the list', this.props.date_created)}
            >
              On the list
            </MenuItem>
            <MenuItem
              eventKey='2'
              active={this.state.status === 'In progress'}
              onClick={this.changeStatus.bind(this, 'In progress', this.props.date_created)}
            >
              In progress
            </MenuItem>
            <MenuItem
              active={this.state.status === 'Sent'}
              eventKey='3'
              onClick={this.changeStatus.bind(this, 'Sent', this.props.date_created)}
            >
              Sent
            </MenuItem>
          </DropdownButton></td>
        <td>{this.formatDate(this.props.date_created)}</td>
      </tr>
    )
  }
}
