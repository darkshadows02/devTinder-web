import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
     const dispatch=useDispatch();
     const navigate=useNavigate();
     // once the data persent into redux i don't call api again again 
     const userData=useSelector(store=> store.users)

     // if i login then i refresh page it only refresh redux profile still has to there other then i logout
    const featchUser=async  ()=>{
          try{
               if(userData) return ;
              const res=await axios.get(BASE_URL+"/profile", {
                withCredentials:true
              });
              dispatch(addUser(res.data))
          }catch(err){
             if(err.status===401){
              navigate("/login");
             }
             console.log(err);
          }
    }
    useEffect(()=>{
      featchUser();
    },[])
    
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Body