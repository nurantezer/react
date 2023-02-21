import React, { useState } from 'react'

const KeyboardClipboard = () => {
    const [inputData, setInputData] = useState("")




  return (
    <div className='container text-center'>
        <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>

        <input type="text"
        className='form-control'
        onChange={(e) => {
            e.target.value = e.target.value.toLocaleUpperCase()
            setInputData(e.target.value)
        }} 
         />
    </div>
  )
}

export default KeyboardClipboard