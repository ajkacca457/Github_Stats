import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Followers = () => {
    const {gitfollowers}= useContext(AppContext);
  return (
    <div className='h-[50vh] overflow-y-scroll'>
        {gitfollowers.map((item)=>{
            const {avatar_url:img,html_url,login}= item;
            return(
                <div className='flex items-center gap-[10px] my-4 bg-sky-300'>
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