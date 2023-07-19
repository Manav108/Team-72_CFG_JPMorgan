import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import axios from 'axios';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  const submitForm = async (userobj) => {
    console.log(userobj);
    if (userobj) {
        const omovie = { id: new Date().getTime().toString(), userobj }
    
        try {
            const res = await axios.post("http://localhost:8000/api/signup/data", omovie)
            console.log(res.data);
            console.log("DD")
            // document.getElementById("already").innerHTML = "Account Create Successfully";
        } catch (err) {
            console.log(err)

        }
    }
    else {
        // document.getElementById("requiredfield").innerHTML = "Please fill Required Field";
        console.log("not found");
    }
  }
  return (
    <div className='sign'>
      <h1 className='text-center text-white pt-5'>SIGNUP</h1>
      <div className="mt-5 text-white bg-dark bg-opacity-75 p-3 mb-5 text-center box2 pt-4" id="cont">
        <div className="row">
          <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(submitForm)}>
              <input
                type="text"
                name="fullname"
                className="form-control mb-3"
                placeholder="Fullname"
                {...register("fullname", { required: "*Fullname is required" })}
              />
              {errors.fullname && <p className='text-danger'>{errors.fullname.message}</p>}
              <input
                type="text"
                name="username"
                className="form-control mb-3"
                placeholder="Username"
                {...register("username", { required: "*Username is required" })}
              />
              {errors.username && <p className='text-danger'>{errors.username.message}</p>}
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                className="form-control mb-3"
                pattern="[0-9]{10}"
                title='Please enter a valid phone number consisting of 10 digits'
                {...register("phonenum", { required: "*Please Enter your Mobile Number" })}
              />
              {errors.mobile && <p className='text-danger'>{errors.mobile.message}</p>}

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                {...register("password", { required: "*Password is required" })}
              />
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}

              <button type="submit" className="btn btn-success">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
