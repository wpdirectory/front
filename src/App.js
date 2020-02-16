import React, { useEffect } from 'react'
import './App.scss'

import { useDispatch } from 'react-redux'

import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'

import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group'

import ProtectedRoute from './utils/ProtectedRoute'

import Login from './pages/Login'
import Home from './pages/Home'
import Searches from './pages/Searches'
import About from './pages/About'

import Offline from './pages/Offline'
import Maintenance from './pages/Maintenance'

import {
  systemUpdateStatus,
} from './redux/actions'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( systemUpdateStatus() )
  }, [] ) // eslint-disable-line

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
          <Switch location={location}>
            <ProtectedRoute exact path="/" children={Home} />
            <Route path="/login" component={Login} />
            <Route path="/searches" component={Searches} />
            <Route path="/about" component={About} />

            <Route path="/offline" component={Offline} />
            <Route path="/maintenance" component={Maintenance} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App
