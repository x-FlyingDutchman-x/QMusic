import React, {Component} from 'react'

import RouteCfg from '../../store/Router'

// import './Index.less'

class Index extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>hello</div>
        // <LocaleProvider locale={zh_CN}>
        //   <RouteCfg/>
        // </LocaleProvider>
    )
  }

  collapseSider() {
    this.refs.sider.toggle()
  }
}

export default Index
