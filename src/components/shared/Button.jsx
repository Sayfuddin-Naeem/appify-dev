import React from 'react'

function Button({type, className, btnName}) {
  return (
    <button type={type} className={className}>{btnName}</button>
  )
}

export default Button;