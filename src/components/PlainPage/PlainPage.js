import React from 'react'
import './PlainPage.scss'

function PlainPage({ name, children }) {
  const classes = [
    'plain-page',
    name && 'plain-page--' + name,
  ]

  return (
    <div className={classes.filter(Boolean).join(' ')}>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default PlainPage
