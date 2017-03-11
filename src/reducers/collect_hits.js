import * as types from '../actions/types';

const Hits = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_RESULTS:
      return action.payload.data.message.items;
    case types.FETCH_MORE_RESULTS:
      return [ ...action.payload.data.message.items, ...state ];
    default:
      return state;
  }
};

export default collectHits;