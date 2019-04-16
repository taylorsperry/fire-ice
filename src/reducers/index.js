import { combineReducers } from 'redux'
import { loading, error, houses } from './house'


const rootReducer = combineReducers({
  loading,
  error,
  houses
})

export default rootReducer;