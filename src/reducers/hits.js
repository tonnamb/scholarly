import * as types from '../actions/types'

const hits = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_RESULTS:
      return action.payload.data.message.items
    default:
      return state
  }
}

export default hits
