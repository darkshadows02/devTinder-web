import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const[emailId, setEmailId]= useState("");
    const [Password, setPassword]= useState("");
    const handleLogin= async ()=>{
         try{
             const res= await axios.post("http://localhost:3000/login", {
              emailId,
              Password
             });
         }catch(err){
            console.log(err);
         }
    }
  return (
    <div className='flex justify-center my-10'>
      <div className="card card-border bg-base-300 w-96">
    <div className="card-body">
      <h2 className="card-title justify-center">Login</h2>
         <div>
           <label className='from-control w-full max-w-xs my-2'>
                 <div className='label'>
                     <samp className='label-text'>Email ID</samp>
                 </div>
                 <input type='text' className='input input-bordered w-full max-w-xs'
                   onChange={(e)=>setEmailId(e.target.value)}
                 />
           </label>
           <label className='from-control w-full max-w-xs my-2'>
                 <div className='label'>
                     <samp className='label-text'>
                        Password
                     </samp>
                 </div>
                 <input type='text' className='input input-bordered w-full max-w-xs'
                  onChange={(e)=> setPassword(e.target.value)}/>
           </label>
         </div>
       <div className="card-actions justify-center m-2">
        <button className="bg-blue-500 text-white btn btn-primary px-4 py-2 rounded" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login