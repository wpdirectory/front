import React from 'react'
import './Login.scss'

import Page from '../../components/Page'
import Button from '../../components/Button'

function Login({ match, history, location }) {
  return (
    <Page name="login">
      <h1>Login Page</h1>
      <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
    </Page>
  )
}

export default Login
