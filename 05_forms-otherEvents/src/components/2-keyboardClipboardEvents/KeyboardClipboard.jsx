import { useState } from "react"

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("")
 
  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>
      <input type="text" className="form-control" onChange={(e) =>{
        e.target.value = e.target.value.toUpperCase()
        setInputData(e.target.value)}
      }  />
      <p className="text-start mt-4">{inputData.toLowerCase()}</p>
      <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="10"></textarea>
    </div>
  )
}

export default KeyboardClipboard
