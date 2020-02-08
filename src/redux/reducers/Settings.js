import { createReducer } from '@reduxjs/toolkit'

import {
  settingsToggleNavigationExpanded,
  settingsToggleNavigationOpen,
} from '../actions'

export const initialState = {
  isNavigationExpanded: false,
  isNavigationOpen: false,
}

export default createReducer( initialState, {
  [settingsToggleNavigationExpanded]: (state, action) => {
    state.isNavigationExpanded = ! state.isNavigationExpanded
  },
  [settingsToggleNavigationOpen]: (state, action) => {
    state.isNavigationOpen = ! state.isNavigationOpen
  },
})
