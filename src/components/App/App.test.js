import App from './App'
import { connect } from 'react-redux'

describe('mstp', () => {
  let initialState = {
    houses: [],
    loading: false,
    error: ''
  }

  let mockState = {
    houses: ['one', 'two'],
    loading: false,
    error: ''
  }


  let expected = {
    houses: [],
    loading: false,
    error: ''
  }
  let mappedProps = mapStateToProps(mockState)
  mappedProps.
  expect(mappedProps).toEqual(expected)
})