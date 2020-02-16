import { createReducer } from '@reduxjs/toolkit'

import {
  userLogin,
  userTokenRefresh,
  userLogout,
} from '../actions'

export const initialState = {
  isLoading: false,
  name: '',
  role: '',
}

export default createReducer( initialState, {
  [userLogin]: (state, action) => {
    
  },
  [userTokenRefresh]: (state, action) => {
      // do proper API call action
  },
  [userLogout]: (state, action) => {
    state = initialState
  },
})
