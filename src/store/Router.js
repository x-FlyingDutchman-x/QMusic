import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Index from '../pages/Index/Index'

class Router extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route exact path="/home" component={Index}/>
        <Redirect to='/home'/>
      </Switch>
    )
  }
}

export default Router
