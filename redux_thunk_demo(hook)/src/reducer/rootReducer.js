
import { combineReducers } from 'redux'
import fetchUserReducer from './fetchUserReducer'

const rootReducer = combineReducers({
  fetchUser: fetchUserReducer
})

export default rootReducer