import { useState } from "react"


const FormWithObject = () => {
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        address:"",
    })

    const {username, email, password, address} = formData




  return (
    <form>
        <h2 className="display-6 text-danger">FORM WİTH OBJECT</h2>

        <div className="mb-3">
            <label htmlFor="username" className='form-label'>
                Username: <span>{username}</span>
            </label>
            <input type="text"
            className='form-control'
            id='usermane'
            value={username || ""} //* username yoksa inputun valusuna null ata
            //! controlled- uncontrolled error (eğer bir inputun valuesu undifened olursa böyle bir hata gelir)
            />
        </div>
        
    </form>
  )
}

export default FormWithObject