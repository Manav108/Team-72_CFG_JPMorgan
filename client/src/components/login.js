import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitForm = async (userobj) => {
    console.log(userobj);
    if (userobj) {
      const omovie = { id: new Date().getTime().toString(), userobj };

      try {
        const res = await axios.post("http://localhost:8000/api/login/data", omovie);
        console.log(res.data);
        navigate("/volunteer/events");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("not found");
    }
  };

  return (
    <div className='login1 container-fluid'>
      <h1 className='text-center pt-5'>LOGIN HERE</h1>
      <div className="mt-5 text-white bg-dark bg-opacity-75 p-3 mb-5 text-center box cont2">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcb23rQPB-ohCd0SEy-aJVHRJEzVlbPWVWw&usqp=CAU" className='mx-auto p-3 img2' alt="" style={{ height: "120px", width: "120px" }} />
        </div>
        <div className="row">
          <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(submitForm)}>
              <input
                type="text"
                name="username"
                className="form-control mb-3"
                placeholder="Username"
                {...register("username", { required: "*Username is required" })}
              />
              {errors.username && <p className='text-danger'>{errors.username.message}</p>}
              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                {...register("password", { required: "*Password is required" })}
              />
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
              <Link to="/volunteer/events" ><button type="submit" className="btn btn-success">Register</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
