import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  render () {

    return (
      <div>
        <header>
          <Link to={'/'}>
            <h2 className='brand-title'>{this.props.brandName}</h2>
          </Link>
        </header>
      </div>
    )
  }
}
