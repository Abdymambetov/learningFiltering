import React from 'react'

function Input(props) {
  return <input style={{width:'200px',height:'50px',borderRadius:'8px'}} placeholde='search' type="text" {...props} />
}

export default Input