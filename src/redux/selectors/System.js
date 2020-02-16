import { createSelector } from '@reduxjs/toolkit'

export const getSystem = state => state.System

export const systemAll = createSelector(
  [getSystem],
  state => state,
)

export const systemStatus = createSelector(
  [getSystem],
  state => state.status,
)
