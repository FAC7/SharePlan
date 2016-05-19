import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12
}

export default class Button extends Component {
  render () {
    return (
      <RaisedButton label={this.props.buttonName} primary={true} style={style} />
    )
  }
}

Button.propTypes = {
  buttonName: React.PropTypes.string.isRequired
}
