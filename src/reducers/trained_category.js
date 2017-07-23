import * as types from '../actions/types'

function updateObjectInArray (array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return action.category
  })
}

const trainedCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_RESULTS:
      const arrayOfStrings = new Array(action.payload.data.message.items.length).fill('')
      return arrayOfStrings
    case types.TRAIN_CLASSIFIER:
      return updateObjectInArray(state, action)
    default:
      return state
  }
}

export default trainedCategoryReducer
