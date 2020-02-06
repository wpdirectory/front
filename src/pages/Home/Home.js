import React from 'react'
import './Home.scss'

import Page from '../../components/Page'
import Button from '../../components/Button'

function Home({ match, history, location }) {
  return (
    <Page name="home">
      <h1>Home Page</h1>
      <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
    </Page>
  )
}

export default Home
