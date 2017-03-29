import classifier from '../classifier'
import * as types from '../../actions/types'
import Bayes from 'bayes'

let defaultClassifier

beforeEach(() => {
  defaultClassifier = Bayes()
  defaultClassifier.learn('', 'cannot classify')
})

it('handles action with unknown type', () => {
  expect(
    classifier(undefined, { type: 'some unknown type' })
  ).toEqual(
    defaultClassifier
  )
})

it('TRAIN_CLASSIFIER: returns trained classifier', () => {
  const trainedClassifier = Bayes()
  trainedClassifier.learn('', 'cannot classify')
  trainedClassifier.learn('nanoparticles', 'useful')
  expect(
    classifier(defaultClassifier,
      { type: types.TRAIN_CLASSIFIER,
        text: 'nanoparticles',
        category: 'useful' })
  ).toEqual(
    trainedClassifier
  )
})
