import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Github from "../images/github.png"

const Login = () => {
  const {loginWithRedirect}= useAuth0();

  return (
    <div className='bg-sky-400 text-white py-8 h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>GITHUB STATS</h1>
      <img src={Github} alt="github-stats" className='bg-white rounded-full w-24 h-24 my-12'/>
      <h4 className='py-4 uppercase'>Login to app</h4>
      <button onClick={loginWithRedirect} className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Login</button>
    </div>

  )
}

export default Login