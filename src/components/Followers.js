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
                <div className='my-4 px-4 first-of-type:mt-0 bg-sky-300' key={index}>
                    <div className='flex items-center justify-between gap-[10px]'>
                        <img src={img} alt={login} className="w-[35px] h-[35px] rounded-full"/>
                        <div>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>
            )

        })}
    </div>
  )
}

export default Followers;