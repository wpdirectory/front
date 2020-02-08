import React from 'react'
import ReactDOM from 'react-dom'
import PlainPage from './PlainPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlainPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})
