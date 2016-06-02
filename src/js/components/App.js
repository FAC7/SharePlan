import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import '../../scss/style.scss'

export default class App extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>{this.props.children}</Col>
        </Row>
      </Grid>
    )
  }
}
