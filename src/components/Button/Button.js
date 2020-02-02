import React from 'react'
import './Button.scss'

function Button({
  text = '',
  type,
  size,
  onClick = () => void(0),
  isLoading = false,
  isDisabled = false
}) {
  const classes = [
    'button',
    type ? 'button--' + type : 'button--normal',
    size ? 'button--' + size : null,
    isLoading && 'button--loading',
    isDisabled && 'button--disabled',
  ]

  return (
    <button
      className={classes.filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={isDisabled}
    >{text}</button>
  )
}

export default Button
