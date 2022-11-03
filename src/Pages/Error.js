import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-red-500 text-white py-8'>
      This is Error
      <NavLink to="/">Back to Home</NavLink>
    </div>
    
  )
}

export default Error