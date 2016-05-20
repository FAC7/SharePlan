import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router'

import Button from '../../components/Button/'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <Row>
                <Col lgOffset={8} lg={4} mdOffset={8} md={4} xsOffset={2} xs={8} >
                  <Button buttonName='Patient Login'/>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <Col lg={4} md={4} xsOffset={2} xs={8}>
                <Link to={'/cliniciandashboard'}>
                  <Button buttonName='Clinician Login' />
                </Link>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img className='big-logo' src='/img/logo.png' />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
