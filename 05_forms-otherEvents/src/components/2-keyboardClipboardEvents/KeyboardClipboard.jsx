import React, { useState } from 'react'

const KeyboardClipboard = () => {
    const [inputData, setInputData] = useState("")

    const handleKeyDown = (e) => {
        console.log(e.keyCode)
        if(e.keyCode >= 97 && e.keyCode <= 105){
            e.preventDefault() //? Rakam girişinin engellenmesi için
            alert("Please dont enter a number")
        }
    }

    const handleParCopy= (e) =>{
        e.preventDefault()
        alert("you cannot copy this text")
    }

    const handleParCut = (e) => {
        e.preventDefault()
        alert("you cannot copy this text")
    }

    const handleAreaPaste = (e) => {
        console.log(e)
        e.target.style.fontSize = "30px"
        e.target.border = "3px solid black"
        e.target.style.backgroundColor = "blue"
        e.target.value += e.clipboardData.getData("text").toLocaleUpperCase() //*üzerine eklemesi için +=
        e.preventDefault()
    }


  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>

      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      <div className="text-start mt-4">
        <h6>Copied Input Data</h6>
        <p onCopy={handleParCopy} onCut={handleParCut}>
          {inputData.toLowerCase()}
        </p>
      </div>

      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
}

export default KeyboardClipboard