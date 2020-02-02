import React from 'react'
import './Login.scss'

import Navigation from '../../components/Navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Button from '../../components/Button'

function Login({ match, history, location }) {
  return (
    <div className="page--login">
      <Header />
      <Navigation />
      <div className="main">
        <h1>Login Page</h1>
        <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
      </div>
      <Footer />
    </div>
  )
}

export default Login
