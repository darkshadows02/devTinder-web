import React from 'react'
import { useDispatch } from 'react-redux';
import {removeUserFromFeed }from "../utils/feedSlice"
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
const UserCard = ({user}) => {
    const {_id,firstName, lastName, photoUrl, age, gender, about}=user;
     const dispatch=useDispatch();
   const handlesendRequest= async(status, userId)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId, {}, {
        withCredentials:true
      });
       
      dispatch(removeUserFromFeed(userId));
    }catch(err){
      // console.log("suraj")
    }
}
    
    return (
    <div className="card bg-base-300 w-96 shadow-sm">
    <figure>
      <img
        src={photoUrl}
        alt="photo" />
    </figure>
    <div className="card-body gap-0">
      <h1 className="card-title text-xl font-bold">{firstName+" "+lastName}</h1>
      {age &&gender &&  <p className='text-sm m-0'>{age+", "+gender}</p>}
      <p className='text-sm opacity-75 leading-tight m-0'>{about}</p>
       <div className="card-actions justify-center mt-3">
        <button className="btn bg-blue-300  mr-3 px-4" onClick={()=>handlesendRequest("ignored", _id)} >Ignore</button>
        <button className="btn  bg-pink-300 p-2" onClick={()=>handlesendRequest("interested", _id)}>interested</button>
      </div>
    </div>  
  </div>
  )
}

export default UserCard
 