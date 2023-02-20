

const Event = () => {

let text = "Hi FS13"

const handleClick = () =>{
  alert("Hi events")
}

const handleReset = (msg) =>{
  console.log(msg)
}

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>CLİCK</button>
      <button onClick={() => handleReset("please clear the text")}>RESET</button>
    </div>
  )
}

export default Event