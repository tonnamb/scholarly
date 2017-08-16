import * as types from '../actions/types'

export function classifyItem (data, classifier) {
  const title = ((data.title && data.title[0]) ? data.title[0] : '__title_not_present__')
  return classifier.categorize(title)
}

const classifiedResults = (state = [], action) => {
  switch (action.type) {
    case types.CLASSIFY_RESULTS:
      const items = action.payload.data.message.items
      const itemsLength = items.length
      const newState = []
      for (let i = 0; i < itemsLength; i++) {
        newState.push({ ...items[i], classification: classifyItem(items[i], action.classifier) })
      }
      return newState
    default:
      return state
  }
}

export default classifiedResults
