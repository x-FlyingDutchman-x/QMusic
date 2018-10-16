import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'

class Router extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={Home}/>
        <Redirect to='/home'/>
      </Switch>
    )
  }
}

export default Router
