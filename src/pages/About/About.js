import React from 'react'
import './About.scss'

import Page from '../../components/Page'
import Button from '../../components/Button'

function About({ match, history, location }) {
  return (
    <Page name="about">
      <h1>About Page</h1>
      <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
    </Page>
  )
}

export default About
