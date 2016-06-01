import React from 'react'
import { Link, browserHistory } from 'react-router'
import cookie from 'react-cookie'

import DefaultButton from '../Button/'

export default class Header extends React.Component {

  onLogout () {
    cookie.remove('clinician_id', { path: '/' })
    cookie.remove('patient_id', { path: '/' })
    browserHistory.push('/')
  }

  render () {
    return (
      <div>
        <header>
          <Link to={'/'}>
            <h2 className='brand-title'>{this.props.brandName}</h2>
          </Link>
          <DefaultButton buttonName='Log Out' handleClick={this.onLogout}/>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  brandName: React.PropTypes.string
}
