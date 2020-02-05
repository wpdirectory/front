import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navigation.scss'

import Icon from '../../components/Icon'

import {
  toggleNavigationExpanded,
} from '../../redux/actions'

import {
  getNavigationExpanded,
} from '../../redux/selectors'

function Navigation({ isExpanded, toggleNavigationExpanded, isOpen }) {
  const classes = [
    'navigation',
    isExpanded && 'navigation--expanded',
    isOpen && 'navigation--open',
  ]

  return (
    <nav className={classes.filter(Boolean).join(' ')}>
      <ul className="menu">
        <li className="menu__item">
          <NavLink strict to="/">
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
            <Icon name="admin-home" theme="dark" />
            <span>About</span>
          </NavLink>
        </li>

        <li className="menu__item menu__item--toggle">
          <button onClick={toggleNavigationExpanded}>
            <Icon name={ isExpanded ? 'arrow-left-alt2' : 'arrow-right-alt2' } theme="dark" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state, ownProps) => ({
  isExpanded: getNavigationExpanded(state),
})

const mapDispatchToProps = {
  toggleNavigationExpanded,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation)