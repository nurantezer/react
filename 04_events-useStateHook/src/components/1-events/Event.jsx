

const Event = () => {
    //*statik değişken olarak kabul ediyor
    let text = "hi fs13"
    const handleClick = () =>{
        alert("Hi events")
    
    }

    const handleReset = (msg) => {
      console.log(msg);
    };
    
    function degistir(){
        text = "hello react"
    }
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={handleClick}>
            CLİCK
        </button>

        <button onClick={() =>handleReset("please")}>RESET</button> //*arrow funtionu direk tetiklemesin diye koyuyorum
        <button onClick={degistir}>Change</button>
    </div>
  )
}

export default Event