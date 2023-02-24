import axios from "axios"
import { useState } from "react"


const AddTutorial = ({getTutorials}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTutorial = {title, description}
    postTutorial(newTutorial)         //!yeni tutorial ekledim
    setDescription("")
    setTitle("")
  }
  
  const postTutorial = async (newTutorial) =>{
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  try {
    await axios.post(BASE_URL,newTutorial)
  } catch (error) {
    console.log(error);
  }
  getTutorials()
  }

  return (
    <div className='container text-center mt-4'>
      <h1 className='display-6 text-danger'>Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
          required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text"
          className="form-control"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your Description"
          required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">Submit</button>

      </form>

    </div>
  )
}

export default AddTutorial