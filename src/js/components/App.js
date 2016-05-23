import React from 'react'
import Header from './Header/index.js'
import { Grid, Row, Col } from 'react-flexbox-grid'
import '../../scss/style.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header brandName='SharePlan' />
        <Grid>
          <Row>
            <Col xs={12}>{this.props.children}</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
