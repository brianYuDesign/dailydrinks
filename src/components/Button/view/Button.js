import React from "react"
import "./Button.css"

const Button = ({ className, onButtonClick, isDisabled, name, title }) => {
  return (
    <button
      disabled={isDisabled}
      className={className}
      name={name}
      onClick={e => {
        e.preventDefault()
        onButtonClick()
      }}
    >
      <span>{title}</span>
    </button>
  )
}

export default Button
