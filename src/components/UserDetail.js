import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserDetail = () => {
  const {gituser}= useContext(AppContext);
  const {avatar_url:img,bio,blog,company,name,twitter_username}=gituser;
  return (
    <div className='px-3 bg-sky-500 my-6'>
      <div className='flex gap-x-[10px] justify-between items-center'>
        <img src={img} alt={name} className="w-[80px] h-[80px] rounded-full"/>
        <a href={`@${twitter_username}`} className="border-2 border-white rounded-md px-3 py-1 text-white">Follow</a>
      </div>
      <div className='text-left my-2 text-white'>
          <h3>{name || "username"}</h3>
          <p>{bio}</p>
          <p>{company}</p>
          <a href={blog} target="_blank">{blog}</a>
      </div>
    </div>
  )
}

export default UserDetail;