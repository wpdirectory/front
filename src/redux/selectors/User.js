import { createSelector } from '@reduxjs/toolkit'

export const getUser = state => state.User

export const getUserAll = createSelector(
  [getUser],
  state => state,
)

export const getUserRole = createSelector(
  [getUser],
  state => state.role,
)
