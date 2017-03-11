import { combineReducers } from 'redux';
import classifer from './classifier';
import hits from './hits';
import numHits from './num_hits';
import query from './query';

const Reducer = combineReducers({
  classifer,
  hits,
  numHits,
  query
});

export default Reducer;