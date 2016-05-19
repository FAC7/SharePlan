import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12
}

export default class Button extends Component {
  render () {
    return (
      <RaisedButton className="login-btn" label={this.props.buttonName} style={style} />
    )
  }
}

Button.propTypes = {
  buttonName: React.PropTypes.string.isRequired
}
