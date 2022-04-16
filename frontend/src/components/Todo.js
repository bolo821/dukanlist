import React, { useState } from 'react'
import EdiText from 'react-editext'
import './todo.css'

const Todo = ({ data, field, handleVendorProfile }) => {
  const [fieldData, setFieldData] = useState(data)
  const handleSave = val => {
    let dataObject = {};
    dataObject[field] = val;
    handleVendorProfile(dataObject)
  }

  return (
    <EdiText
      className="button"
      type='text'
      value= {fieldData}
      onSave={handleSave} />
  )
}

export default Todo