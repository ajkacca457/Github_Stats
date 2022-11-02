import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Followers = () => {
    const {gitfollowers}= useContext(AppContext);
  return (
    <div className='h-[20vh] overflow-y-scroll'>
        {gitfollowers.map((item,index)=>{
            const {avatar_url:img,html_url,login}= item;
            return(
                <div className='flex items-center gap-[10px] my-4 first-of-type:mt-0 bg-sky-300' key={index}>
                    <img src={img} alt={login} className="w-[50px] h-[50px] rounded-full"/>
                    <div className='text-left'>
                        <p>{login}</p>
                        <a href={html_url}>{html_url}</a>
                    </div>
                </div>
            )

        })}
    </div>
  )
}

export default Followers;