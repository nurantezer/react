import { useState } from "react"

const useStateCounter = () => {
const [count, setCount] = useState(0)
const increment = () =>{
    setCount(count + 1)
}
  return (
    <div className="container text-center">
      <h2>Use State Counter</h2>
      <h1 onClick={increment} className="display-4">Count:{count}</h1>
      <button  className="btn btn-sucses">
        INC
      </button>
      <button className="btn btn-danger">CLEAR</button>
      <b className="btn btn-warning">
        DEC
      </b>
    </div>
  );
}

export default useStateCounter