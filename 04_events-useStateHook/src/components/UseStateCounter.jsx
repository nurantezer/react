import {useState} from 'react'

const UseStateCounter = () => {

const [count, setCount] = useState(0)

const increment = () => {
    setCount(count + 1)
}
  return (
    <div className='container text-center mt-4'>
    <h2 className='text-danger'>Use State Counter</h2>
    <h1 className='display-4'>Count:{count}</h1>
    <button className='btn btn-success' onClick={increment}>INC</button>
    <button className='btn btn-danger' onClick={() => setCount(0)}>CLR</button>
    <button className='btn btn-warning' onClick={() => count > 0 && setCount(count - 1)}>DEC</button>
    </div>
  )
}

export default UseStateCounter