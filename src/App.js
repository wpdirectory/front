import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import './App.scss'

import history from './history'

import Login from './pages/Login'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/searches" component={Login} />
        <Route path="/about" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
