import { fetchHouse } from './fetchHouse'
import { isLoading, hasErrored, storeHouse } from '../actions/'

describe('fetchHouse', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www'
    mockDispatch = jest.fn()
  })
  
  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchHouse(mockUrl)
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'bad'
    }))

    const thunk = fetchHouse(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('bad'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchHouse(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch fetchHouse with the correct param', async () => {
    const mockHouse = 'house'
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockHouse)
    }))

    const thunk = fetchHouse(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeHouse(mockHouse))
  })
})