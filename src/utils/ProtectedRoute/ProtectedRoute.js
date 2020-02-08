import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  //getCurrentUserIsAuthed,
} from '../../redux/selectors'

function ProtectedRoute({
  component: Component,
  systemStatus,
  needsAuth = false,
  isUserAuthed = false,
  ...rest
}) {
  return (
    <Route {...rest} render={ props =>
        ( systemStatus === 0 ) ? (
          <Redirect to="/offline" />
        ) : ( systemStatus === 1 ) ? (
          <Redirect to="/maintenance" />
        ) : ( needsAuth && ( isUserAuthed === false ) ) ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  systemStatus: PropTypes.number.isRequired,
  needsAuth: PropTypes.bool,
  isUserAuthed: PropTypes.bool,
}

const mapStateToProps = (state, ownProps) => ({
  //userIsAuthed: getCurrentUserIsAuthed(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProtectedRoute)
