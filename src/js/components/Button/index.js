import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class Button extends Component {
  render () {
    return (
      <RaisedButton label={this.props.buttonName} />
    )
  }
}

Button.propTypes = {
  buttonName: React.PropTypes.string.isRequired
}
