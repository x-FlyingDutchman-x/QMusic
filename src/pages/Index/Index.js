import React, {Component} from 'react'
import {connect} from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

import './Index.less'

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
      <div className="indexpage">
        <AppBar color="default"  className="appBar">
          <Toolbar>
            <Typography variant="h6" color="inherit" className="appItem">
              Test App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className="drawer"
        >
          <Divider className="first" />
          <List className="drawerItem">
            <ListItem button>
              <ListItemText primary="List.1" />
            </ListItem>
          </List>
          <Divider />
          <List className="drawerItem">
            <ListItem button>
              <ListItemText primary="List.2" />
            </ListItem>
          </List>
        </Drawer>
        <Grid container spacing={8} className="content">
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
