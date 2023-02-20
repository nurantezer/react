import { useState } from "react"

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("")
 const handleKeyDown = () =>{
  if(e.keyCode >= 48 && e.keyCode <= 57){
    alert("please dont enter a number")
    e.preventDefault()
  }
 }

 const handleAreaPaste = (e) =>{
 e.target.style.fontSize = "30px"
 
 }
  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>
      <input type="text" className="form-control" onChange={(e) =>{
        e.target.value = e.target.value.toUpperCase()
        setInputData(e.target.value)}
      }  
      onKeyDown = {handleKeyDown}
      />
      <p className="text-start mt-4">{inputData.toLowerCase()}</p>
      <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="10" onPaste={handleAreaPaste}></textarea>
    </div>
  )
}

export default KeyboardClipboard
