import React, {Component} from 'react'
import {connect} from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// import './Home.less'

import MusicqqAction from '../../actions/musicqq'

let MusicqqAct = new MusicqqAction()

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    this.props.loading()
  }

  render() {
    return (
      <Grid container spacing={8} className="content">
        <Grid item xs={6}>
          <Paper style={{height:'100%'}}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{height:'100px'}}>xs=12</Paper>
        </Grid>
      </Grid>
    )
  }
}


export default connect(
  (state) => ({
    musicqqState: state.musicqqState,
  }),
  (dispatch) => ({
    loading: () => dispatch(MusicqqAct.loading()),
  })
)(Home)
