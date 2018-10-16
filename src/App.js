import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch } from 'react-router-dom'

import History from './store/History'
import Store from './store/Store'
import RouteCfg from './store/Router'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import pink from '@material-ui/core/colors/pink'

const accent = pink[400];

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
  },
});

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
              <RouteCfg/>
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
