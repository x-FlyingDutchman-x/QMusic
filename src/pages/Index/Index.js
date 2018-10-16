import React, {Component} from 'react'
import {connect} from 'react-redux'
import RouteCfg from '../../store/Router'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

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
        <AppBar
          position="sticky"
          color="default"
          className="appBar"
        >
          <Toolbar className="line">
            <Typography variant="h6" color="inherit" className="appItem">
              Test App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          open={true}
          className="drawer"
        >
          <List className="first drawerItem">
            <ListItem className="drawerItemBtn" button>
              <ListItemText primary="List.1" />
            </ListItem>
          </List>
          <Divider />
          <List className="drawerItem">
            <ListItem className="drawerItemBtn" button>
              <ListItemText primary="List.2" />
            </ListItem>
          </List>
        </Drawer>
        <RouteCfg />
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
