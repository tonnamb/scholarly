import * as types from '../actions/types';

const mode = (state = 'search', action) => {
  switch (action.type) {
    case types.APPLY_MODE:
      return 'apply';
    default:
      return state;
  }
};

export default mode;