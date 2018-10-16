import React, {Component} from 'react'
import {connect} from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// import './Index.less'

import MusicqqAction from '../../actions/musicqq'

let MusicqqAct = new MusicqqAction()

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    this.props.loading()
  }

  render() {
    return (
      <div>
        <AppBar position="position" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{paddingTop:'10px'}}>
              Q Music
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={8} style={{height:'100%'}}>
          <Grid item xs={6}>
            <Paper style={{height:'100%'}}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{height:'100px'}}>xs=12</Paper>
          </Grid>
        </Grid>
      </div>
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
)(Index)
