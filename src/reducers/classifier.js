import * as types from '../actions/types';
import Bayes from 'bayes';

const defaultClassifier = Bayes();
defaultClassifier.learn('', 'not classified')

const classifier = (state = defaultClassifier, action) => {
  switch (action.type) {
    case types.TRAIN_CLASSIFIER:
      const stateJson = state.toJson();
      const newState = Bayes.fromJson(stateJson).learn(action.text, action.category);
      return newState;
    default:
      return state;
  }
};

export default classifier;