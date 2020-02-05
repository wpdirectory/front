import React from 'react'
import './Page.scss'

import Navigation from '../../components/Navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Page({ name, children }) {
  const classes = [
    'page',
    name && 'page--' + name,
  ]

  return (
    <div className={classes.filter(Boolean).join(' ')}>
      <>
        <Navigation />
        <div className="main">
          <Header />
          <div className="content">
            {children}
          </div>
          <Footer />
        </div>
      </>
    </div>
  )
}

export default Page
