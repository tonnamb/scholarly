import { combineReducers } from 'redux'
import classifier from './classifier'
import hits from './hits'
import numHits from './num_hits'
import query from './query'
import mode from './mode'
import classified from './classified'
import displayFilter from './display_filter'
import disableButtonReducer from './disable_button'
import trainedCategoryReducer from './trained_category'

const Reducer = combineReducers({
  classifier,
  hits,
  numHits,
  query,
  mode,
  classified,
  displayFilter,
  disableButtonReducer,
  trainedCategoryReducer
})

export default Reducer