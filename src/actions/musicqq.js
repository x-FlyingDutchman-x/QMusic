import MusicqqTypes from '../constants/musicqq'

class MusicqqAction {
  constructor() {
    this.cacheExpires = 60 * 30
  }

  get(domain, subclass) {
    let self = this

    return dispatch => {
      dispatch(self.loading())
      fetch(
        '',
        {
          method: 'GET',
          mode: 'cors',
        }
      )
      .then(res => res.json())
      .then(resData => {
        dispatch(self.getSuc(resData.data))
      })
      .catch(function(e) {
        dispatch(self.err('90101'))
      })
    }
  }

  getSuc(data) {
    return {
      type:    MusicqqTypes.MUSICQQ_GET,
      data:    data,
      loading: false,
    }
  }

  loading() {
    return {
      type: MusicqqTypes.MUSICQQ_LOADING
    }
  }

  cleanErr() {
    return {
      type: MusicqqTypes.MUSICQQ_CLEANERR
    }
  }

  err(code) {
    return {
      type: MusicqqTypes.MUSICQQ_ERR,
      errCode: code
    }
  }
}

export default MusicqqAction
