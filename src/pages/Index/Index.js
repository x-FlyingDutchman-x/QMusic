import React, {Component} from 'react'
import {connect} from 'react-redux'

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
      <div>hello</div>
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
