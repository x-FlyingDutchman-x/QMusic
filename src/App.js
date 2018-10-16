import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import History from './store/History'
import Store from './store/Store'

import Index from './pages/Index/Index'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import pink from '@material-ui/core/colors/pink'


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
})

const storeSetting = Store()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={storeSetting}>
          <Router BrowserHistory={History} basename="/">
            <Switch>
              <Route path="/" component={Index} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
