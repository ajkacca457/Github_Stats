import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Search = () => {
  const [user,setUser]=useState("");
  const {requestlimit, error,getGithubUser}= useContext(AppContext);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user) {
      getGithubUser(user);
    }
  }

  return (
    <div>
      <div className='limit w-full text-center bg-sky-600 my-4 text-white py-3'> <p>Remaining Requests: {requestlimit}/60</p></div>
      {error.show && <div className='error bg-red-500 text-white text-center py-2 my-3'><p>{error.msg}</p></div>}
      <form onSubmit={handleSubmit}>
        <div className='form-group flex items-center justify-center gap-x-[5px]'>
        <input type="text" placeholder='search user..' className='border-2 border-sky-300 w-full rounded-md py-1 px-2' value={user} onChange={(e)=>{setUser(e.target.value)}} />
        <button className='bg-sky-600 text-white px-3 py-1 rounded-md'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search