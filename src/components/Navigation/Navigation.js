import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navigation.scss'

import Icon from '../../components/Icon'

import {
  settingsToggleNavigationExpanded,
  settingsToggleNavigationOpen,
} from '../../redux/actions'

import {
  settingsNavigationExpanded,
  settingsNavigationOpen,
} from '../../redux/selectors'

function Navigation() {
  const dispatch   = useDispatch()
  const isExpanded = useSelector(settingsNavigationExpanded)
  const isOpen     = useSelector(settingsNavigationOpen)

  const onEscKey = e => {
    if ( 27 === e.keyCode ) {
      dispatch( settingsToggleNavigationOpen() )
    }
  }

  useEffect( () => {
    document.addEventListener( 'keydown', onEscKey, false )

    return () => document.removeEventListener( 'keydown', onEscKey, false )
  }, [] ) // eslint-disable-line

  const classes = [
    'navigation',
    isExpanded && 'navigation--expanded',
    isOpen && 'navigation--open',
  ]

  return (
    <nav className={classes.filter(Boolean).join(' ')}>
      <ul className="menu">
        <li className="menu__item">
          <NavLink exact strict to="/">
            <Icon name="admin-home" theme="dark" />
            <span>Home</span>
          </NavLink>
        </li>

        <li className="menu__item">
          <NavLink strict to="/searches">
            <Icon name="search" theme="dark" />
            <span>Searches</span>
          </NavLink>
        </li>

        <li className="menu__item">
          <NavLink strict to="/about">
            <Icon name="info" theme="dark" />
            <span>About</span>
          </NavLink>
        </li>

        <li className="menu__item menu__item--toggle">
          <button onClick={() => dispatch( settingsToggleNavigationExpanded() )}>
            <Icon name={ isExpanded ? 'arrow-left-alt2' : 'arrow-right-alt2' } theme="dark" />
          </button>
        </li>
      </ul>
      <span class="navigation__close" onClick={() => dispatch( settingsToggleNavigationOpen() )}>
        <Icon name="no-alt" theme="dark" />
      </span>
    </nav>
  )
}

export default memo( Navigation )
