import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const {isAuthenticated,logout, user}= useAuth0();
  
  const isUser= isAuthenticated && user;

  return (
    <div className='bg-sky-500 text-white w-full text-center py-4 px-4 mb-3'>
      <h3 className='underline'>Github Stats</h3>
      <div className='flex items-center justify-between'>
      {isUser && user.picture && <img src={user.picture} alt={user.name} className="w-[80px] h-[80px] rounded-full"/>}
      {isUser && user.name && <h2>Welcome user: {user.name}</h2>}
      {isUser && <button onClick={()=> {logout({returnTo:window.location.origin})}} className="bg-red-500 mx-2 px-2 py-1">Logout</button>}
      </div>
    </div>
  )
}

export default Navbar