import React from 'react'
import Header from './Header/index.js'
// import { cyan500 } from 'material-ui/styles/colors'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Grid, Row, Col } from 'react-flexbox-grid'

import '../../scss/style.scss'

// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: cyan500
//   }
// })

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header brandName='SharePlan' />
        <Grid>
          <Row>
            <Col xs={12}>{this.props.children}</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
