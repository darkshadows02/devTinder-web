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
    <div className="card-body">
      <h1 className="card-title text-xl font-bold">{firstName+" "+lastName}</h1>
      {age &&gender &&  <p>{age+", "+gender}</p>}
      <p>{about}</p>
       <div className="card-actions justify-center">
        <button className="btn bg-blue-300   mr-3 p-2">Ignore</button>
        <button className="btn  bg-pink-300 p-2">Intrested</button>
      </div>
    </div>  
  </div>
  )
}

export default UserCard

// import React from "react";

// const UserCard = ({ user }) => {
//   const { firstName, lastName, photoUrl, age, gender, about } = user;

//   return (
//     <div className="card bg-base-300 w-96 shadow-xl hover:shadow-2xl transition-all duration-300">
      
//       {/* Image */}
//       <figure className="px-6 pt-6">
//         <img
//           src={photoUrl}
//           alt={`${firstName} ${lastName}`}
//           className="rounded-2xl h-64 w-full object-cover 
//                      hover:scale-105 transition-transform duration-300"
//         />
//       </figure>

//       {/* Body */}
//       <div className="card-body items-center text-center">
//         <h2 className="card-title text-xl font-bold">
//           {firstName} {lastName}
//         </h2>

//         {age && gender && (
//           <p className="text-sm text-gray-400">
//             {age} • {gender}
//           </p>
//         )}

//         <p className="text-sm opacity-80 mt-2">
//           {about}
//         </p>

//         {/* Buttons */}
//         <div className="card-actions gap-4 mt-6">
//           <button className="btn btn-outline btn-error px-6 hover:scale-105 transition">
//             Ignore
//           </button>

//           <button className="btn btn-secondary px-6 hover:scale-105 transition">
//             Interested
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
