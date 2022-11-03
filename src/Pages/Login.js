import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const {loginWithRedirect}= useAuth0();

  return (
    <div className='bg-blue-500 text-white py-8 h-[50vh]'>
      Login to app
      <button onClick={loginWithRedirect} className="bg-orange-500 mx-2 px-2 py-1">Login</button>
    </div>

  )
}

export default Login