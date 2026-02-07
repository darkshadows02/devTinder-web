import axios from 'axios';
import React, { use, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import UserCard from './UserCard';

const EditProfile = ({user}) => {
    const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl]=useState(user.photoUrl);
     const[age, setAge]=useState(user.age);
     const[gender, setGender]=useState(user.gender);
     const [about, setAbout]=useState(user.about);
  const [error, seterror]=useState("");
  const [showToast, setshowToast]=useState(false);
   const dispatch=useDispatch();
   const saveProfile=async()=>{
        seterror("")
       try{
        const res=await axios.patch(BASE_URL+"/profile/edit", {firstName, lastName, photoUrl, age, gender, about}, {withCredentials:true})
          dispatch(addUser(res?.data))
          setshowToast(true)
          setTimeout(()=>{
            setshowToast(false)
          }, 3000)
           
    }catch(err){
          seterror(err.response);
       }
   }
  return (
    <>
    <div className='flex justify-center my-10'> 
    <div className="flex items-center justify-center bg-base-200 mx-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
             Edit Profile
          </h2>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-300 px-2"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
           {/*lastName */}
           <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-300 px-2"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
              {/*PhotoUrl */}
           <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-300 px-2"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
            {/*age */}
            <div className="form-control">
            <label className="label">
              <span className="label-text">age</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-300 px-2"
              value={age}
              onChange={(e) =>  setAge(e.target.value)}
            />
          </div>
            {/*Gender */}
            <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-300 px-2"
              value={gender}
              onChange={(e) =>   setGender(e.target.value)}
            />
          </div>
            {/*About */}
            <div className="form-control">
            <label className="label">
              <span className="label-text">About</span>
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-300 px-2"
              value={about}
              onChange={(e) =>  setAbout(e.target.value)}
            />
          </div>
          {/* Button */}
           <p className='text-red-500'>{error}</p>
          <div className="form-control mt-2">
            <button
              className="btn btn-primary w-full bg-blue-500"
              onClick={saveProfile}
            >
               Save Profile 
            </button>
          </div>

          {/* Extra text */}
          <p className="text-center text-sm mt-4 text-gray-500 ">
            Don’t have an account? <span className="link link-primary">Sign up</span>
          </p>
        </div>
      </div>
    </div>
      <UserCard user={{firstName, lastName, photoUrl, age, gender, about}} />
    </div>
    {showToast &&
    <div className='toast toast-top toast-enter top-16 left-1/2 -translate-x-1/2 z-40'>
        <div className='alert alert-success'>
             <span>Profile save successfully.</span>
        </div>
    </div>}
    </>
  );
}

export default EditProfile


 