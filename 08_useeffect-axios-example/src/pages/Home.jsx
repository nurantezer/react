import axios from "axios"
import { useEffect, useState } from 'react'
import AddTutorial from '../components/AddTutorial'
import TutorialList from '../components/TutorialList'

const Home = () => {
  const [tutorials, setTutorials] = useState([]) //!json formatında gelecek veriler
  
  const BASE_URL ="https://tutorial-api.fullstack.clarusway.com/tutorials/"
  
  const getTutorials = async () =>{
    try {
      const {data} = await axios(BASE_URL)  //!Data havada desc edildi
      setTutorials(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(tutorials);
 useEffect(() => {
   getTutorials()
 }, [])
 

  
  return (
    <>
    <AddTutorial getTutorials={getTutorials}/>
    <TutorialList tutorials={tutorials} getTutorials={getTutorials}/>
    </>
  )
}

export default Home