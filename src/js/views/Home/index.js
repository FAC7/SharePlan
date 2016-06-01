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

  toggleModal (userType) {
    this.setState({
      showModal: !this.state.showModal,
      userType: userType
    })
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={10}
              md={6}
              lg={4}
              mdOffset={3}
              lgOffset={4}
              xsOffset={1}
            >
              <img className='logo' src='/img/logo.png' />
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3}>
              <div className='title-container'>
                <h2 className='brand-title'>SharePlan</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              md={8}
              xs={10}
              lgOffset={3}
              mdOffset={2}
            >
              <Row>
                <div className='homepage-buttons-container'>
                  <Col lg={5}>
                    <DefaultButton
                      cssClass='homepage-button'
                      buttonName='I am a Patient'
                      handleClick={this.toggleModal.bind(this, 'client')}
                    />
                  </Col>
                  <Col lg={5} lgOffset={2}>
                    <DefaultButton
                      cssClass='homepage-button'
                      buttonName='I am a Clinician'
                      handleClick={this.toggleModal.bind(this, 'clinician')}
                    />
                  </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Login
          userType={this.state.userType}
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
        />
      </div>
    )
  }
}
