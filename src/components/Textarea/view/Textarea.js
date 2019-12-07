import React from "react"
import "./Textarea.css"

const Textarea = ({
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
      <textarea
        name={fieldName}
        value={value}
        onChange={e => onFieldChange(fieldName, e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default Textarea
