import axios from "axios"
import { useEffect, useState } from "react"
import Addtutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
  try {
    const { data } = axios(BASE_URL)
    setTutorials(data)
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
    getTutorials()
  }, [])
  

  return (
    <>
      <Addtutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  )
}

export default Home
