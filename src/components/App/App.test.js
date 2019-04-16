import App from './App'
import { connect } from 'react-redux'
import { shallow } from 'enzyme'

describe('mstp', () => {
  let wrapper = shallow(<App />)

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

  let mapStateToProps = jest.fn()

  let mappedProps = mapStateToProps(mockState)

  wrapper.instance.mappedProps()

  expect(mappedProps).toEqual(mockState)
})