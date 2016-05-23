import React from 'react'
import {Table, thead, th, td, tr, tbody, Button, ProgressBar, Row, Col, Grid} from 'react-bootstrap'

export default class ClientLetterTable extends React.Component {
    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <h2> Pending Letters </h2>
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
                        
                    </Col>
                </Row>
                <Row> 
                    <Col xs={10} xsOffset={1}>
                        <h2> Sent Letters </h2>
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
                    </Col>
                </Row>
            </Grid>
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