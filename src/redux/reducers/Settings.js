import { createReducer } from '@reduxjs/toolkit'

import {
  toggleNavigationExpanded,
  toggleNavigationOpen,
} from '../actions'

export const initialState = {
  isNavigationExpanded: true,
  isNavigationOpen: false,
}

const toggleNavigationExpandedReducer = createReducer(initialState, {
  [toggleNavigationExpanded]: (state, props) => {
    state.isNavigationExpanded = ! state.isNavigationExpanded
  }
})

const toggleNavigationOpenReducer = createReducer(initialState, {
  [toggleNavigationOpen]: (state, props) => {
    state.isNavigationOpen = ! state.isNavigationOpen
  }
})

export default {
  toggleNavigationExpandedReducer,
  toggleNavigationOpenReducer,
}
