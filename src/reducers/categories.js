import * as types from '../actions/types';

const categories = (state = { 'not classified': 0 }, action) => {
  switch (action.type) {
    case types.TRAIN_CLASSIFIER:
      const newObject = {};
      newObject[action.category] = 0;
      return Object.assign({}, state, newObject);
    case types.APPLY_STORE:
      const classification = action.data.classification;
      const prevCount = state[classification];
      const newObj = {};
      newObj[classification] = prevCount+1;
      return Object.assign({}, state, newObj);
    default:
      return state;
  }
};

export default categories;