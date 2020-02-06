import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import './App.scss'

import history from './history'

import Login from './pages/Login'
import Home from './pages/Home'
import Searches from './pages/Searches'
import About from './pages/About'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/searches" component={Searches} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App
