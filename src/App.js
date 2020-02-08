import React, { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './App.scss'

import history from './history'

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
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( systemUpdateStatus() )
  }, [] ) // eslint-disable-line

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/searches" component={Searches} />
        <Route path="/about" component={About} />

        <Route path="/offline" component={Offline} />
        <Route path="/maintenance" component={Maintenance} />
      </Switch>
    </Router>
  )
}

export default App
