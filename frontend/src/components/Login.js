import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const Login = () => {
 
   const navigate = useNavigate();

  const loginsubmit = async (formdata, { resetForm, setSubmitting }) => {
    console.log(formdata)
    resetForm()
    setSubmitting(true)

   const res = await fetch('http://localhost:5000/user/authenticate', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers :{
        'Content-Type' : 'application/json'
      }
    });
    console.log(res.status);

    if(res.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Login Successfull'
      })
      navigate("/chat");
    } else if(res.status === 401){
      Swal.fire({
        icon : 'error',
        title : 'Error',
        text : 'Email or Password is incorrect'
      })
    } else{
      Swal.fire({
        icon : 'error',
        title : 'Error',
        text : 'Something went worng'
      })
    }

    setTimeout(() => {
      setSubmitting(false)
    }, 2000)
  }
  return (
    <div className="vh-100" style={{ backgroundColor: "#ccc" }}>
      <h1 className="display-4 mt-5 text-center">Login Page</h1>

      <div className="col-md-3 col-sm-4 mx-auto">
        <div className="card">
          <div className="card-header bg-danger">
            <p className="text-center text-white m-0 h4">Login Now</p>
          </div>
          <div className="card-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={loginsubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <label>Email Address</label>
                  <input type="email" className="form-control mb-3" value={values.email} name="email" onChange={handleChange} />

                  <label>Password</label>
                  <input type="password" className="form-control mb-3" value={values.password} name="password" onChange={handleChange} />

                  <a href="/" className="mt-5">
                    Forgot Password
                  </a>

                  <button type="submit" className="btn btn-danger w-100 mb-4">
                    {isSubmitting ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
                  </button>
                </form>
              )}
            </Formik>
          </div>

          <div className="card-footer">
            <p className="text-center m-0">
              Don't have an account? <a href="/register">Register Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login