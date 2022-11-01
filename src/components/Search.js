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
        <input type="text" placeholder='search user..' value={user} onChange={(e)=>{setUser(e.target.value)}} />
        <button className='bg-red-300'>Search</button>

      </form>
    </div>
  )
}

export default Search