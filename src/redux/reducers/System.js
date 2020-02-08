import { createReducer } from '@reduxjs/toolkit'

import {
  systemRefreshStatusPending,
  systemRefreshStatusSuccess,
  systemRefreshStatusError,
} from '../actions'

export const initialState = {
  isLoading: true,
  status: 0,
  notice: '',
  noticeType: '',
  error: ''
}

export default createReducer( initialState, {
  [systemRefreshStatusPending]: (state, _) => {
    return state
  },
  [systemRefreshStatusSuccess]: (state, action) => {
      state.status     = action.payload.status
      state.notice     = action.payload.notice
      state.noticeType = action.payload.noticeType
  },
  [systemRefreshStatusError]: (_, action) => {
    console.log( 'Error updating system status: ' + action.payload )
  },
})
