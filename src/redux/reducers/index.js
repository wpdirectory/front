import { combineReducers } from '@reduxjs/toolkit'

import Settings from './Settings'
import System   from './System'
import User     from './User'

export default combineReducers({
  Settings,
  System,
  User,
})
