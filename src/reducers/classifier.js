import * as types from '../actions/types';

const classifier = (state = {}, action) => {
  switch (action.type) {
    case types.TRAIN_CLASSIFIER:
      return state;
    default:
      return state;
  }
};

export default classifier;