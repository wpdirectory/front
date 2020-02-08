import React from 'react'
import './Maintenance.scss'

import PlainPage from '../../components/PlainPage'
import Button from '../../components/Button'

function Maintenance({ match, history, location }) {
  return (
    <PlainPage name="maintenance">
      <h1>Maintenance</h1>
      <p>Welcome to WPdir. <Button text="Clicky" onClick={() => alert('Clicky!')} /></p>
    </PlainPage>
  )
}

export default Maintenance
