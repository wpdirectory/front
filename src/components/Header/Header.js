import React from 'react'
import './Header.scss'

import Icon from '../../components/Icon'

function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <Icon name="menu" onClick={() => alert('Menu Toggle')} />
      </div>
      <div className="header__logo">
        WPDirectory
      </div>
      <div className="header__user">
        <Icon name="admin-users" onClick={() => alert('User Menu')} />
      </div>
    </header>
  )
}

export default Header
