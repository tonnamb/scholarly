import * as types from '../actions/types';

const numHits = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_RESULTS:
      return action.payload.data.message['total-results'];
    default:
      return state;
  }
};

export default numHits;