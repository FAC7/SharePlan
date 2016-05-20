import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home'
import ClinicianDashboard from './views/ClinicianDashboard/'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='/cliniciandashboard' component={ClinicianDashboard} />
  </ Route>
)
