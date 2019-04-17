import { loading, houses, error } from './house'
import { isLoading, hasErrored, storeHouse } from '../actions'

describe('house', () => {
  describe('loading, houses, error', () => {
    it('loading should return the initial state', () => {
      const expected = false
      const result = loading(undefined, {})
      expect(result).toEqual(expected)
    })

    it('loading should return a bool', () => {
      const mockBool = true
      const mockAction = isLoading(mockBool)
      const result = loading(undefined, mockAction)
      expect(result).toEqual(mockBool)
    })

    it('houses should return the initial state', () => {
      const expected = []
      const result = houses(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return an array of houses', () => {
      const mockData = ['one', 'two']
      const mockAction = storeHouse(mockData)
      const result = houses(undefined, mockAction)
      expect(result).toEqual(mockData)
    })

    it('error should return initial state', () => {
      const expected = ''
      const result = error(undefined, {})
      expect(result).toEqual(expected)
    })

    it('error should return an error message', () => {
      const mockMsg = 'bad'
      const mockAction = hasErrored(mockMsg)
      const result = error(undefined, mockAction)
      expect(result).toEqual(mockMsg)
    })
  })
})