import React, { useState } from 'react'

const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password:"",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = formValues;
    alert(`Username:${username}
    Email:${email}
    Password:${password}
    `)
  }
  const handleFormValues = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  return (
    <div className="container">
      <h1 className="text-center mt-4">CONTACT FORM</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="usrname"
            placeholder="Enter your username"
            value={formValues.username}
            onChange={handleFormValues}
          />
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleFormValues}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleFormValues}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-danger mb-4">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact