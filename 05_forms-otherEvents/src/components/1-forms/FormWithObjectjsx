import { useState } from "react";

const FormWithObject = () => {
const [formData, setFormData] = useState({
  username:"",
  email:"",
  password:"",
  address:"",
})
const{username, email,password} = FormData
const handleFormData = (e) =>{
setFormData({...formData, [e.target.id]:e.target.value})
}

const handleSubmit = (e) =>{
  e.preventDefault()
  alert(`username:${username} email:${email} password: ${password}`)

 setFormData({})
}
  return (
    <form onSubmit={handleFormData}>
      <h2 className="display-6 text-danger">FORM WİTH OBJECT</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span>{username}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="username"
          onChange={handleFormData}
          value={username}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email <span>{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleFormData}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="paessword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleFormData}
          value={email}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormWithObject
