import query from '../query'
import * as types from '../../actions/types'

it('handles action with unknown type', () => {
  expect(
    query(undefined, { type: 'some unknown type' })
  ).toEqual(
    null
  )
})

it('keeps track of search query', () => {
  const mockPayload = {
    'data': {
      'message': {
        'query': {
          'search-terms': 'nanoparticles'
        }
      }
    }
  }
  expect(
    query(null, { type: types.FETCH_RESULTS, payload: mockPayload })
  ).toEqual(
    'nanoparticles'
  )
})
