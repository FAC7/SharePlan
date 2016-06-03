import React from 'react'
import { Col, Row } from 'react-bootstrap'
export default class LargeLogo extends React.Component {
  render () {
    return (
      <Row>
        <Col
          xs={10}
          md={4}
          lg={2}
          xsOffset={1}
          mdOffset={4}
          lgOffset={5}
        >
          <div className='footer-logo'>
            <img src='/img/logo.png' className='logo'/>
          </div>
        </Col>
      </Row>
    )
  }
}
