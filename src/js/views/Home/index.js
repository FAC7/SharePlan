import React, { Component } from 'react'

import Button from '../../components/Button/'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Button buttonName='Patient Login'/>
        <Button buttonName='Clinician Login' />
      </div>
    )
  }
}
