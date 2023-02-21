import { useState } from "react"


const Form = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`
        username:${username} 
        email:${email} 
        password:${password}`)

        setEmail("")
        setPassword("")
        setUsername("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="display-6 text-danger">FORMS</h2>

        <div className="mb-3">
            <label htmlFor="username" className="form-label">
                Username: <span>{username}</span>
            </label>
            <input type="text" 
            className="form-control" 
            id="username" required 
            onChange={handleUsername} 
            value={username}/>
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email: <span>{email}</span>
            </label>
            <input type="email" 
            className="form-control" 
            id="email" 
            value={email}
            required 
         onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input type="password" 
            className="form-control" 
            id="password" 
            value={password}
            required  
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-danger">Submit</button>
    </form>
  )
}

export default Form