import React from 'react'
import ReactDOM from 'react-dom'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute />
        </Switch>
      </Router>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})