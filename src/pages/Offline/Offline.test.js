import React from 'react'
import ReactDOM from 'react-dom'
import Offline from './Offline'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Offline />, div)
  ReactDOM.unmountComponentAtNode(div)
})
