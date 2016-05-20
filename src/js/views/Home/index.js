import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import DefaultButton from '../../components/Button/'
import Login from '../../components/ClientLogin/'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <Row>
                <Col lgOffset={8} lg={4} mdOffset={8} md={4} xsOffset={4} xs={4} >
                  <DefaultButton buttonName='I am a Patient'/>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <Col lg={4} md={4} xsOffset={4} xs={4}>
                <DefaultButton buttonName='I am a Clinician' handleClick={this.toggleModal}/>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img className='logo' src='/img/logo.png' />
            </Col>
          </Row>
        </Grid>
        <Login toggleModal={this.toggleModal} showModal={this.state.showModal}/>
      </div>
    )
  }
}
