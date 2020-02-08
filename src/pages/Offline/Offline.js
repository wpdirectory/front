import React from 'react'
import './Offline.scss'

import PlainPage from '../../components/PlainPage'
import Button from '../../components/Button'

function Offline({ match, history, location }) {
  return (
    <PlainPage name="offline">
      <h1>Offline</h1>
      <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
    </PlainPage>
  )
}

export default Offline
