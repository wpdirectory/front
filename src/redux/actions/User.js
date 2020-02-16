import { createAction } from '@reduxjs/toolkit'

export const userLogin = createAction('user/AUTH_LOGIN')
export const userTokenRefresh = createAction('user/AUTH_TOKEN_REFRESH')
export const userLogout = createAction('user/AUTH_LOGOUT')
