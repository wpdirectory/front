import { createAction } from '@reduxjs/toolkit'

export const systemRefreshStatusPending = createAction('system/REFRESH_STATUS_PENDING')
export const systemRefreshStatusSuccess = createAction('system/REFRESH_STATUS_SUCCESS')
export const systemRefreshStatusError   = createAction('system/REFRESH_STATUS_ERROR')

export function systemUpdateStatus() {
  return dispatch => {
    dispatch( systemRefreshStatusPending() )

    window.axios.get( 'https://pokeapi.co/api/v2/pokemon/ditto/' )
    .then( response => {
      dispatch( systemRefreshStatusSuccess(response.data) )
    })
    .catch( error => {
      let message = ''
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        message = 'Request failed.'
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest
         */
        message = 'No response from server.'
      } else {
        // Something happened in setting up the request and triggered an Error
        message = 'Failed making login request.'
      }
      dispatch( systemRefreshStatusError(message) )
    })
  }
}
