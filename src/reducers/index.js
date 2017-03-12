import { combineReducers } from 'redux';
import classifier from './classifier';
import hits from './hits';
import numHits from './num_hits';
import query from './query';
import mode from './mode';
import categories from './categories';
import applyHits from './apply_hits';
import applyStore from './apply_store';


const Reducer = combineReducers({
  classifier,
  hits,
  numHits,
  query,
  mode,
  categories,
  applyHits,
  applyStore
});

export default Reducer;