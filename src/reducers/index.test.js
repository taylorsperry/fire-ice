import { createStore } from 'redux'
import { rootReducer } from './index'
import { loading, error, houses } from './house'

describe('rootReducer', () => {
  it('should return a store', () => {
    const store = createStore(rootReducer)
    expect(store.getState().loading).toEqual(loading(undefined, {}))
    expect(store.getState().error).toEqual(error(undefined, {}))
    expect(store.getState().houses).toEqual(houses(undefined, {}))
  })
  
})