import mode from '../mode'
import * as types from '../../actions/types'

it('handles action with unknown type', () => {
  expect(
    mode(undefined, { type: 'some unknown type' })
  ).toEqual(
    'search'
  )
})

it('APPLY_MODE: change mode to apply mode', () => {
  expect(
    mode('search', { type: types.APPLY_MODE })
  ).toEqual(
    'apply'
  )
})
