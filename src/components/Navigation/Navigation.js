import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navigation.scss'

import {
  toggleNavigationExpanded,
} from '../../redux/actions'

import {
  getNavigationExpanded,
} from '../../redux/selectors'

function Navigation({ isExpanded, toggleNavigationExpanded }) {
  const classes = [
    'navigation',
    isExpanded && 'navigation--expanded',
  ]

  return (
    <nav className={classes.filter(Boolean).join(' ')}>
      <ul className="menu">
        <li className="menu__item">
          <NavLink strict to="/">
            <span>Home</span>
          </NavLink>
        </li>

        <li className="menu__item">
          <NavLink strict to="/searches">
            <span>Searches</span>
          </NavLink>
        </li>

        <li className="menu__item">
          <NavLink strict to="/about">
            <span>About</span>
          </NavLink>
        </li>
      </ul>

      <button onClick={toggleNavigationExpanded}>Toggle</button>
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