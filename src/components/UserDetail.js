import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserDetail = () => {
  const {gituser}= useContext(AppContext);
  const {avatar_url:img,bio,blog,company,name,twitter_username}=gituser;
  console.log(img,bio,blog,company,name,twitter_username);
  return (
    <div className='bg-indigo-300 flex gap-x-[10px] justify-center items-center p-8 my-[2%]'>
      <img src={img} alt={name} className="w-[20%]"/>
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