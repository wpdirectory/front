import { createReducer } from '@reduxjs/toolkit'

import {
  toggleNavigationExpanded,
  toggleNavigationOpen,
} from '../actions'

export const initialState = {
  isNavigationExpanded: true,
  isNavigationOpen: false,
}

export default createReducer( initialState, {
  [toggleNavigationExpanded]: (state, props) => {
    state.isNavigationExpanded = ! state.isNavigationExpanded
  },
  [toggleNavigationOpen]: (state, props) => {
    state.isNavigationOpen = ! state.isNavigationOpen
  },
})
