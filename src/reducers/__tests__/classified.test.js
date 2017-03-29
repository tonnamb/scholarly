import classifiedResults, { classifyItem } from '../classified'
import * as types from '../../actions/types'
import Bayes from 'bayes'

it('handles action with unknown type', () => {
  expect(
    classifiedResults(undefined, { type: 'some unknown type' })
  ).toEqual(
    []
  )
})

it('CLASSIFY_RESULTS: returns array of classified results', () => {
  const trainedClassifier = Bayes()
  trainedClassifier.learn('', 'cannot classify')
  trainedClassifier.learn('nanoparticles', 'useful')

  const action = {
    type: types.CLASSIFY_RESULTS,
    classifier: trainedClassifier,
    payload: {
      data: {
        message: {
          items: [
            { title: 'kittens' },
            { title: 'nanoparticles' },
            { title: 'radiohead' }
          ]
        }
      }
    }
  }

  expect(
    classifiedResults([], action)
  ).toEqual(
    [
      { title: 'kittens', classification: classifyItem({ title: 'kittens' }, trainedClassifier) },
      { title: 'nanoparticles', classification: classifyItem({ title: 'nanoparticles' }, trainedClassifier) },
      { title: 'radiohead', classification: classifyItem({ title: 'radiohead' }, trainedClassifier) }
    ]
  )
})
