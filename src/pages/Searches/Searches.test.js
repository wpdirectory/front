import React from 'react'
import ReactDOM from 'react-dom'
import Searches from './Searches'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Searches />, div)
  ReactDOM.unmountComponentAtNode(div)
})
