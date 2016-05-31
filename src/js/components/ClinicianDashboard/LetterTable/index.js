import React from 'react'
import { Table, thead, th, td, tr, tbody, ProgressBar, DropdownButton, MenuItem, Button } from 'react-bootstrap'
import axios from 'axios'
export default class LetterTable extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.postData = this.postData.bind(this)
  }
  componentWillMount () {
    this.setState({
      letters: this.props.letters
    })
  }
  changeStatus (letterStatus, index, date_created) {
    console.log('letter', date_created)
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
  render () {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Topic</th>
            <th>Recipients</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
        {this.state.letters? this.state.letters.map((letter, i) => {
          return (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <Button bsStyle='link'>
                  {letter.topic}
                </Button>
              </td>
              <td>{letter.recipient}</td>
              <td>
                <ProgressBar bsStyle='info' now={letter.status === 'In progress' ? 50 : 100}/>
              </td>
              <td>
                <DropdownButton bsStyle='info' title={letter.status} id={`dropdown-basic-${i}`}>
                  <MenuItem eventKey='1'
                    active={letter.status === 'In progress'}
                    onClick={this.changeStatus.bind(this, 'In progress', i)}
                  >
                    In progress
                  </MenuItem>
                  <MenuItem
                    active={letter.status === 'Sent'}
                    eventKey='2'
                    onClick={this.changeStatus.bind(this, 'Sent', i, letter.date_created)}
                  >
                    Sent
                  </MenuItem>
                </DropdownButton></td>
              <td>{letter.date_created}</td>
            </tr>
          )
        }) : ''}
        </tbody>
      </Table>
    )
  }
}

LetterTable.defaultProps = {
  letters: React.PropTypes.array
}
