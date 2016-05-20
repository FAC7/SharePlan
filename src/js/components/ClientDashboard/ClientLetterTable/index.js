import React from 'react'
import {Table, thead, th, td, tr, tbody, Button, ProgressBar} from 'react-bootstrap'

export default class ClientLetterTable extends React.Component {
    render () {
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Topic</th>
                        <th>Recipients</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.activeLetters? this.props.activeLetters.map((letter, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <Button bsStyle="link">
                                        {letter.topic}
                                    </Button>
                                </td>
                                <td>{letter.recipients}</td>
                                <td>
                                    {letter.status} <ProgressBar active bsStyle='info' now={this.props.progressBar[letter.status]}/>
                                </td>
                            </tr>
                        )
                    }) : ''}
                    </tbody>
                </Table>
            <Table responsive>
                <thead>
                    <tr>
                    <th>Topic</th>
                    <th>Recipients</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.sentLetters? this.props.sentLetters.map((letter, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                <Button bsStyle="link">
                                    {letter.topic}
                                </Button>
                            </td>
                            <td>{letter.recipients}</td>
                        </tr>
                    )
                }) : ''}
                </tbody>
              </Table>
            </div>
        )
    }
}

ClientLetterTable.defaultProps = {
    progressBar: {
        'On the list': 25,
        'In preparation': 50,
        'Waiting review': 75,
        'Sent': 100
    }
}