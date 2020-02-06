import { createSelector } from '@reduxjs/toolkit'

export const getSettings = state => state.Settings

export const getNavigationExpanded = createSelector(
  [getSettings],
  state => state.isNavigationExpanded
)

export const getNavigationOpen = createSelector(
  [getSettings],
  state => state.isNavigationOpen
)
