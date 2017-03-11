import * as types from '../actions/types';

const query = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_RESULTS:
      return action.payload.data.message.query['search-terms'];
    default:
      return state;
  }
};

export default query;