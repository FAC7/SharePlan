import React from 'react'
import {Table, thead, th, td, tr, tbody, Button, ProgressBar} from 'react-bootstrap'

export default class ClientLetterTable extends React.Component {
    render () {
        return (
            <Table responsive>
                <thead>
                    <tr>
                    <th>Letter id</th>
                    <th>Topic</th>
                    <th>Recipients</th>
                    <th>Correspondence</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.letters? this.props.letters.map((letter, i) => {
                    return (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>
                                <Button bsStyle="link">
                                    {letter.topic}
                                </Button>
                            </td>
                            <td>{letter.recipients}</td>
                            <td>{letter.correspondence}</td>
                            <td>{letter.status}</td>
                            <td>{letter.due}</td>
                        </tr>
                    )
                }) : ''}
                </tbody>
              </Table>
        )
    }
}