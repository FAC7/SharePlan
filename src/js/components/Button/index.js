import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class DefaultButton extends Component {
  render () {
    return (
      <Button
        bsStyle='primary'
        bsSize='large'
        onClick={this.props.handleClick}
      >{this.props.buttonName}</Button>
    )
  }
}

DefaultButton.propTypes = {
  buttonName: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func
}
