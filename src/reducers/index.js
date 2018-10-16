import { combineReducers } from 'redux'

import MusciqqReducer from './musicqq'

let Musicqq = new MusciqqReducer()

export default combineReducers({
  musicqqState: Musicqq.handler,
})
