import { combineReducers } from 'redux';
import classifier from './classifier';
import hits from './hits';
import numHits from './num_hits';
import query from './query';
import mode from './mode';
import applyHits from './apply_hits';

const Reducer = combineReducers({
  classifier,
  hits,
  numHits,
  query,
  mode,
  applyHits
});

export default Reducer;