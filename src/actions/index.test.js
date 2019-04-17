import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const mockBool = false
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: mockBool
    }

    const result = actions.isLoading(mockBool)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of HAS_ERRORED', () => {
    const mockMsg = 'bad'
    const expectedAction = {
      type: 'HAS_ERRORED',
      message: mockMsg
    }

    const result = actions.hasErrored(mockMsg)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of STORE_HOUSE', () => {
    const mockData = ['one', 'two']
    const expectedAction = {
      type: 'STORE_HOUSE',
      data: mockData
    }

    const result = actions.storeHouse(mockData)
    expect(result).toEqual(expectedAction)
  })
})