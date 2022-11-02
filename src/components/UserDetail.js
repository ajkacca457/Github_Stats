import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserDetail = () => {
  const {gituser}= useContext(AppContext);
  const {avatar_url:img,bio,blog,company,name,twitter_username}=gituser;
  return (
    <div className='bg-indigo-300 flex gap-x-[10px] h-[20vh] items-center'>
      <img src={img} alt={name} className="w-[100px] h-[100px]"/>
      <div>
        <h3>{name || "username"}</h3>
        <p>{bio}</p>
        <p>{company}</p>
        <p>{blog}</p>
        <a href={`@${twitter_username}`}>Twitter</a>
      </div>
    </div>
  )
}

export default UserDetail;