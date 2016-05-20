import React from 'react'
import {Table, thead, th, td, tr, tbody, DropdownButton, MenuItem, Button, ProgressBar} from 'react-bootstrap'

export default class LetterTable extends React.Component {
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
                    <th>Due</th>
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
                            <td>
                                <DropdownButton bsStyle='info' title={status} id={`dropdown-basic-${i}`}>
                                  <MenuItem eventKey="1">On the list</MenuItem>
                                  <MenuItem eventKey="2">'In preperation'</MenuItem>
                                  <MenuItem eventKey="3" active>'Waiting review'</MenuItem>
                                  <MenuItem eventKey="4">'Sent'</MenuItem>
                                </DropdownButton></td>
                            <td>{letter.due}</td>
                        </tr>
                    )
                }) : ''}
                </tbody>
              </Table>
            )
    }
    
}

const statuses = ['On the list', 'In preparation', 'Waiting review', 'Sent']