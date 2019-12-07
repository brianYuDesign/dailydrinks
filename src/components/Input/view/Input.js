import React from "react"
import "./Input.css"

const Input = ({
  label,
  type,
  value,
  fieldName,
  onFieldChange,
  placeholder,
  required
}) => {
  return (
    <div className="group">
      {label && <label htmlFor={fieldName}>{label} :</label>}
      <input
        name={fieldName}
        type={type}
        value={value}
        onChange={e => onFieldChange(fieldName, e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default Input
