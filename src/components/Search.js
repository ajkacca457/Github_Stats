import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [user,setUser]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group flex items-center justify-center gap-x-[5px]'>
        <input type="text" placeholder='search user..' className='border-2 border-indigo-300 w-full rounded-md py-1 px-2' value={user} onChange={(e)=>{setUser(e.target.value)}} />
        <button className='bg-red-300 px-3 py-1 rounded-md'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search