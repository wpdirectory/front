import { createReducer } from '@reduxjs/toolkit'

import {
  toggleNavigationExpanded,
} from '../actions'

export const initialState = {
  isNavigationExpanded: true,
}

export default createReducer(initialState, {
  [toggleNavigationExpanded]: (state, props) => {
    state.isNavigationExpanded = ! state.isNavigationExpanded
  }
})
