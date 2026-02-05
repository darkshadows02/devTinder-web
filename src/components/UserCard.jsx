import React from 'react'

const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, age, gender, about}=user;
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
        <button className="btn bg-blue-300  mr-3 px-4">Ignore</button>
        <button className="btn  bg-pink-300 p-2">Intrested</button>
      </div>
    </div>  
  </div>
  )
}

export default UserCard
 