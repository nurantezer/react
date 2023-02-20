

const Event = () => {

let text = "Hi FS13"

const handleClick = () =>{
  alert("Hi events")
}

const handleReset = (msg) =>{
  console.log(msg)
}

function degistir(){
  text = "Hello React"
  console.log(text)
}

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>CLİCK</button>
      <button onClick={() => handleReset("please clear the text")}>RESET</button>
      <button onClick={degistir}>CHANGE</button>
    </div>
  )
}

export default Event