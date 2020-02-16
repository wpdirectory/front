import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './redux/store'
import history from './history'
import axios from 'axios'

import App from './App'
import * as serviceWorker from './serviceWorker'

window.axios = axios

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
