import * as types from '../actions/types'

const displayFilter = (state = 'all', action) => {
  switch (action.type) {
    case types.DISPLAY_CATEGORY:
      return action.category
    default:
      return state
  }
}

export default displayFilter
