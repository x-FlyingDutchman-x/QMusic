import MusicqqTypes from '../constants/musicqq'

class MusicqqReducer {
  constructor() {
    this.initState = {
      data: {},
      loading: false,
      err: 0,
      ts: 0
    }

    this.state = {}
    this.action = ''

    this.handler = this.handler.bind(this)
  }

  handler(state, action) {
    this.state = (typeof(state) === 'undefined') ? this.initState : state
    this.action = action

    switch (action.type) {
      case MusicqqTypes.MUSICQQ_LOADING:
        this.loading()
        break

      case MusicqqTypes.MUSICQQ_GET:
        this.get()
        break

      case MusicqqTypes.MUSICQQ_ERR:
        this.err()
        break

      case MusicqqTypes.MUSICQQ_CLEANERR:
        this.cleanErr()
        break

      default:
        break
    }

    return this.state
  }

  loading() {
    let state = {
      ...this.state,
      loading: true,
    }

    this.state = state
  }

  get() {
    let now = (new Date()).valueOf()

    let state = {
      ...this.state,
      data: this.action.data,
      loading: this.action.loading,
      ts: now,
    }

    this.state = state
  }

  err() {
    let now = (new Date()).valueOf()

    let state = {
      ...this.state,
      err: this.action.errCode,
      loading: false,
      ts: now,
    }

    this.state = state
  }

  cleanErr() {
    let state = {
      ...this.state,
      err: 0,
    }

    this.state = state
  }
}

export default MusicqqReducer
