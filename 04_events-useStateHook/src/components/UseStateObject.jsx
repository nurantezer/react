import {useState} from 'react'

const UseStateObject = () => {
 const [person, setPerson] = useState({
    name: "ahmet",
    surname: "can",
    salary: 10000,
 })
console.log(person)
const handleSalaryInc = () =>{
    setPerson({...person, salary: person.salary + 500})
}

const handleNameToggle = () =>{
    setPerson({...person, name: person.name.toUpperCase(), surname: person.surname.toUpperCase()})
}

const handleSalaryDec = () => {
    setPerson({...person, salary: person.salary - 500})
}

  return (
    <div className='container text-center mt-4'>
    <h2 className='text-danger'>Use State Object</h2>
    <h3 className='display-4'>{person.name} {person.surname}</h3>
    <h3 className='display-6'>Salary:{person.salary}</h3>
    <button className='btn btn-success' onClick={handleSalaryInc}>SALARY INC</button>
    <button className='btn btn-danger' onClick={handleNameToggle}>CLR</button>
    <button className='btn btn-warning' onClick={handleSalaryDec}>SALARY DEC</button>
    </div>
  )
}

export default UseStateObject