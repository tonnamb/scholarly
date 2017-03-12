import * as types from '../actions/types';

const applyStore = (state = [], action) => {
  switch (action.type) {
    case types.APPLY_STORE:
      return [ action.data, ...state ];
    default:
      return state;
  }
};

export default applyStore;