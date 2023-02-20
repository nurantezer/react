const Form = () => {
  return (
  
     <form>
      <h2 className="display-6 text-danger">FORMS</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input type="email" className="form-control" id="username" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form
