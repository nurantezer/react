import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"


const PersonDetail = () => {
    //! navigate ile gönderilen state'i yakalamak için useLocation Hook'u kullanilabilir.
    //! Bu durumda veri, state ile geldiği için yeniden fetch yapılmasına gerek kalmaz.
    // const {state : person} = useLocation()
    const navigate = useNavigate()
    //! Linkteki parametreyi almak için useParams Hook'u kullanilabilir.
    const { id } = useParams()
    const [person, setPerson] = useState({})
     
    const getPerson = () => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => res.json())
            .then((data) => setPerson(data.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
     getPerson()
    }, [])
    console.log(id);
  return (
      <div className="container text-center">
          <h3>
              {person?.first_name} {person?.last_name}
          </h3>
          <img className="rounded" src={person?.avatar} alt="" />
          <p>{person?.email}</p>
          <div>
              <button className="btn btn-success me-2" onClick={() => navigate("/")}>Go Home</button>
              <button className="btn btn-warning " onClick={() => navigate(-1)}>Go Back</button>
          </div>
    </div>
  )
}

export default PersonDetail