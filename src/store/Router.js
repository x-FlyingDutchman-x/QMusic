import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import { Spin } from 'antd'

class Router extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  loadingComponent({ isLoading, error }) {
    if (isLoading) {
        return (
          <div style={{marginTop:'250px',textAlign:'center',}}>
            <Spin />
          </div>
        )
    } else if (error) {
        return (
          <div>Sorry, there was a problem loading the page.</div>
        )
    } else {
        return null;
    }
  }

  render() {
    let Home = Loadable({
      loader: () => import( '../pages/Home/Home'),
      loading: this.loadingComponent
    });

    return (
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Redirect to='/home'/>
      </Switch>
    )
  }
}

export default Router
