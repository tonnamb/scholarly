import hits from '../hits'
import * as types from '../../actions/types'

it('handles action with unknown type', () => {
  expect(
    hits(undefined, { type: 'some unknown type' })
  ).toEqual(
    []
  )
})

it('keeps track of array of search hit objects', () => {
  const mockPayload = {
    'data': {
      'message': {
        'items': [
          { 'name': 'one' },
          { 'name': 'two' },
          { 'name': 'three' }
        ]
      }
    }
  }
  expect(
    hits([], { type: types.FETCH_RESULTS, payload: mockPayload })
  ).toEqual(
    [
      { 'name': 'one' },
      { 'name': 'two' },
      { 'name': 'three' }
    ]
  )
})

it('overwrite previous array of search hit objects', () => {
  const mockPayload = {
    'data': {
      'message': {
        'items': [
          { 'name': 'one' },
          { 'name': 'two' },
          { 'name': 'three' }
        ]
      }
    }
  }
  expect(
    hits([
      { 'name': 'existing' },
      { 'name': 'objects' }
    ], { type: types.FETCH_RESULTS, payload: mockPayload })
  ).toEqual(
    [
      { 'name': 'one' },
      { 'name': 'two' },
      { 'name': 'three' }
    ]
  )
})
