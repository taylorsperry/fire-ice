import { App, mapStateToProps, mapDispatchToProps } from './App'

import { fetchHouse } from '../../thunks/fetchHouse'

jest.mock('../../thunks/fetchHouse')

describe('mapStateToProps', () => {
  it('should return an object with houses, loading, and error', () => {
    const mockState = {
      houses: ['one', 'two'],
      loading: false,
      error: ''
    }

    const expected = {
      houses: ['one', 'two'],
      loading: false,
      error: ''
    }

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with fetchHouse', async () => {

    const mockUrl = 'wwww'
    const mockDispatch = jest.fn()
    const mockData = ['one', 'two']
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }))

    const thunk = fetchHouse(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(fetchHouse(mockUrl))
  
  })
})