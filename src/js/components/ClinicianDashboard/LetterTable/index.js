import React from 'react'
import {
  Table, thead, th, td, tr, tbody, ProgressBar, DropdownButton, MenuItem, Button
} from 'react-bootstrap'
import axios from 'axios'

export default class LetterTable extends React.Component {
  constructor () {
    super()
    this.state = {
      letters: []
    }
    this.changeStatus = this.changeStatus.bind(this)
    this.postData = this.postData.bind(this)
    this.formatDate = this.formatDate.bind(this)
  }

  componentDidMount () {
    const letters = this.props.letters
    const sortedLetters = letters.sort((prev, curr) => {
      return prev.date_created - curr.date_created
    })
    this.setState({
      letters: sortedLetters
    })
  }

  changeStatus (letterStatus, index, date_created) {
    const letters = this.state.letters
    letters[index].status = letterStatus
    this.setState({
      letters: letters
    })
    this.postData(letterStatus, date_created)
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
      <Table responsive>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Recipients</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
        {this.state.letters ? this.state.letters.map((letter, i) => {
          return (
            <tr key={i}>
              <td>
                <Button bsStyle='link'>
                  {letter.topic}
                </Button>
              </td>
              <td>{letter.recipient}</td>
              <td>
                <ProgressBar
                  bsStyle='warning' now={letterColor[letter.status]}
                />
              </td>
              <td>
                <DropdownButton bsStyle='info' title={letter.status} id={`dropdown-basic-${i}`}>
                  <MenuItem
                    eventKey='1'
                    active={letter.status === 'On the list'}
                    onClick={this.changeStatus.bind(this, 'On the list', i, letter.date_created)}
                  >
                    On the list
                  </MenuItem>
                  <MenuItem
                    eventKey='2'
                    active={letter.status === 'In progress'}
                    onClick={this.changeStatus.bind(this, 'In progress', i, letter.date_created)}
                  >
                    In progress
                  </MenuItem>
                  <MenuItem
                    active={letter.status === 'Sent'}
                    eventKey='3'
                    onClick={this.changeStatus.bind(this, 'Sent', i, letter.date_created)}
                  >
                    Sent
                  </MenuItem>
                </DropdownButton></td>
              <td>{this.formatDate(letter.date_created)}</td>
            </tr>
          )
        }) : ''}
        </tbody>
      </Table>
    )
  }
}

LetterTable.propTypes = {
  letters: React.PropTypes.array
}
