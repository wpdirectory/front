import { createSelector } from '@reduxjs/toolkit'

export const getSettings = state => state.Settings

export const settingsAll = createSelector(
  [getSettings],
  state => state,
)

export const settingsNavigationExpanded = createSelector(
  [getSettings],
  state => state.isNavigationExpanded,
)

export const settingsNavigationOpen = createSelector(
  [getSettings],
  state => state.isNavigationOpen,
)
