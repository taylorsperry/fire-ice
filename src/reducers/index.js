import { combineReducers } from 'redux'
import { loading, error, houses } from './house'


export const rootReducer = combineReducers({
  loading,
  error,
  houses
})

export default rootReducer;