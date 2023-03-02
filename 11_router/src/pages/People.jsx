import { useEffect, useState } from "react"
import{useNavigate} from "react-router-dom"

const People = () => {
  const [people, setPeople] = useState([])
  const navigate = useNavigate()
  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
  getPeople()
  }, [])
  

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justfiy-content-center g-3">
        {people?.map((p) => {
          const { id, first_name, last_name, avatar } = p
          return (
            <div key={id}
              className="col-sm-12 col-md-6 col-lg-4"
              type="button"
              onClick={() => navigate(`${id}` , {state: p})}
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          )
      })}
      </div>

    </div>
  )
}

export default People