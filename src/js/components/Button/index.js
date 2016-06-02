import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class DefaultButton extends Component {
  render () {
    return (
      <Button
        bsSize='large'
        bsClass={this.props.cssClass + ' default-button'}
        onClick={this.props.handleClick}
      >{this.props.buttonName}</Button>
    )
  }
}

DefaultButton.propTypes = {
  buttonName: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func,
  cssClass: React.PropTypes.string
}
