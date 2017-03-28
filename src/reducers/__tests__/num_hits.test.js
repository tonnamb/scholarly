import numHits from '../num_hits'
import * as types from '../../actions/types'

it('handles action with unknown type', () => {
  expect(
    numHits(undefined, { type: 'some unknown type' })
  ).toEqual(
    null
  )
})

it('FETCH_RESULTS: keeps track of number of search hits', () => {
  const mockPayload = {
    'data': {
      'message': {
        'total-results': 156683
      }
    }
  }
  expect(
    numHits(null, { type: types.FETCH_RESULTS, payload: mockPayload })
  ).toEqual(
    156683
  )
})
