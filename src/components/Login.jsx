import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
  const [emailId, setEmailId] = useState("virat99@tcs.com");
  const [password, setPassword] = useState("Virat@876");
  const [error, seterror]=useState("");
  
   const dispatch=useDispatch();
   const usenavigate=useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL+"/login", {
        emailId,
        password,
      },{withCredentials:true});
       dispatch(addUser(res.data));
     return usenavigate("/")
    } catch (err) {
      seterror(err?.response?.data || "Something went wrong")
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome Back 👋
          </h2>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              className="input input-bordered bg-base-200 px-2"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered bg-base-200 px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
           <p className='text-red-500'>{error}</p>
          <div className="form-control mt-2">
            <button
              className="btn btn-primary w-full bg-blue-500"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          {/* Extra text */}
          <p className="text-center text-sm mt-4 text-gray-500 ">
            Don’t have an account? <span className="link link-primary">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login