import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch } from 'react-router-dom'

import History from './store/History'
import Store from './store/Store'
import RouteCfg from './store/Router'

const storeSetting = Store()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Provider store={storeSetting}>
        <Router BrowserHistory={History} basename="/">
          <Switch>
            <RouteCfg/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
