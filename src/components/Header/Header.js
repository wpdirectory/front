import React from 'react'
import { useDispatch } from 'react-redux'
import './Header.scss'

import Icon from '../../components/Icon'

import {
  settingsToggleNavigationOpen,
} from '../../redux/actions'

function Header() {
  const dispatch = useDispatch()

  return (
    <header className="header">
      <div className="header__menu" onClick={() => dispatch( settingsToggleNavigationOpen() )}>
        <Icon name="menu" />
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
