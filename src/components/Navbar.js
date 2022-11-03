import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const {isAuthenticated,logout, user}= useAuth0();
  
  const isUser= isAuthenticated && user;

  return (
    <div className='bg-indigo-400 text-white w-full text-center py-4 mb-3'>
      <div className='flex'>
      {isUser && user.picture && <img src={user.picture} alt={user.name}/>}
      {isUser && user.name && <h2>Welcome user: {user.name}</h2>}
      </div>
      {isUser && <button onClick={()=> {logout({returnTo:window.location.origin})}} className="bg-red-500 mx-2 px-2 py-1">Logout</button>}        
    </div>
  )
}

export default Navbar