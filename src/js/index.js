import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Router, browserHistory } from 'react-router'
import Routes from './routes.js'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={Routes} />
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
