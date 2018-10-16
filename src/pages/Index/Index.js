import React, {Component} from 'react'
import {connect} from 'react-redux'

// import './Index.less'

class Index extends Component {
  constructor(props) {
    super(props)

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
  })
)(Index)
