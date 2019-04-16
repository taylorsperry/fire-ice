import { isLoading, hasErrored, storeHouse } from '../actions'

export const fetchHouse = async (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      dispatch(storeHouse(data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}