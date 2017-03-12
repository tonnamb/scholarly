import * as types from '../actions/types';

const applyHits = (state = [], action) => {
  switch (action.type) {
    case types.APPLY_FETCH:
      return action.payload.data.message.items;
    default:
      return state;
  }
};

export default applyHits;