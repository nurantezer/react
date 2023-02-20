import {useState} from 'react'

const UseStateObject = () => {
 const [person, setPerson] = useState({
    name: "ahmet",
    surname: "can",
    salary: "10000",
 })
console.log(person)



  return (
    <div className='container text-center mt-4'>
    <h2 className='text-danger'>Use State Object</h2>

    </div>
  )
}

export default UseStateObject