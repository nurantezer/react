import { useState } from "react";

const Form = () => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleUsername = (e) =>{
setUsername(e.target.value)
}

const handleSubmit = (e) =>{
  e.preventDefault()
  alert(`username:${username} email:${email} password: ${password}`)
}
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">FORMS</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span>{username}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="username"
          onChange={handleUsername}
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
          onChange={() => setEmail(e.target.value)}
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
          onChange={() => setPassword(e.target.value)}
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

export default Form
