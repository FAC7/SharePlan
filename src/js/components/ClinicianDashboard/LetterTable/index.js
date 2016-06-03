import React from 'react'
import {
  Table, thead, th
} from 'react-bootstrap'
import TableRow from './tr.js'

export default class LetterTable extends React.Component {
  constructor () {
    super()
    this.state = {
      letters: []
    }
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.letters !== this.props.letters
  }
  sortLetters (letters) {
    const sortedLetters = letters.sort((prev, curr) => {
      return prev.date_created - curr.date_created
    })
    return sortedLetters
  }
  render () {
    const letters = this.sortLetters(this.props.letters)
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
        {letters ? letters.map((letter, i) => {
          return (
            <TableRow
              index={i}
              topic={letter.topic}
              recipient={letter.recipient}
              status={letter.status}
              date_created={letter.date_created}
              getClients={this.props.getClients}
            />
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
