import displayFilter from '../display_filter'
import * as types from '../../actions/types'

it('handles action with unknown type', () => {
  expect(
    displayFilter(undefined, { type: 'some unknown type' })
  ).toEqual(
    'all'
  )
})

it('DISPLAY_CATEGORY: change state to category to display', () => {
  expect(
    displayFilter('all', { type: types.DISPLAY_CATEGORY, category: 'useful' })
  ).toEqual(
    'useful'
  )
})
