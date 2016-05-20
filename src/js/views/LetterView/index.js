import React from 'react'
import CommentBox from '../../components/LetterView/CommentBox/index.js'
import {Grid, Row, Col} from 'react-flexbox-grid'

export default class LetterView extends React.Component {
  render () {
    return (
      <Row>
        <Col xs={6} xsOffset={1}>
          <iframe
              src="img/sample.pdf"
              title="your_title"
              align="top"
              height="620"
              width="100%"
              frameborder="0"
              scrolling="auto"
              target="Message">
          </iframe>
        </Col>
        <Col xs={4}>
          <CommentBox />
        </Col>
      </Row>
    )
  }
}
