import React from 'react'
import './Searches.scss'

import Page from '../../components/Page'
import Button from '../../components/Button'

function Searches({ match, history, location }) {
  return (
    <Page name="searches">
      <h1>Searches Page</h1>
      <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
    </Page>
  )
}

export default Searches
