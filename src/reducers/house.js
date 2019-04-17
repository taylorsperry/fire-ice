export const loading = (state=false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default: 
      return state
  }
}

export const error = (state='', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.message
    default: 
      return state
  }
}

export const houses = (state=[], action) => {
  switch (action.type) {
    case 'STORE_HOUSE':
      return action.data
    default:
      return state
  }
}