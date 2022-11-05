    import React from 'react'
    import { useContext } from 'react';
    import { AppContext } from '../context/AppContext';
    import { SlUserFollowing } from 'react-icons/sl';
    import {BiGitRepoForked} from 'react-icons/bi';
    import {MdOutlineSummarize} from 'react-icons/md';
    import {GiShadowFollower} from 'react-icons/gi';
    import InfoCard from './InfoCard';


    
    const UserInfo = () => {
      const {gituser : {
        following,followers,public_repos,public_gists
      }}=(useContext(AppContext));
      console.log(following,followers,public_repos,public_gists);

      const items= [
        {
          id:1,
          icon:<SlUserFollowing size={25} className="mx-auto"/>,
          label:"following",
          data:following,
          bgColor:'bg-sky-500'
        },
        {
          id:2,
          icon:<GiShadowFollower size={25} className="mx-auto"/>,
          label:"followers",
          data:followers,
          bgColor:'bg-sky-500'
        },
        {
          id:3,
          icon:<BiGitRepoForked size={25} className="mx-auto"/>,
          label:"Repositories",
          data:public_repos,
          bgColor:'bg-sky-500'
        },
        {
          id:4,
          icon:<MdOutlineSummarize size={25} className="mx-auto"/>,
          label:"gist",
          data:public_gists,
          bgColor:'bg-sky-500'
        },
      ]

      return (
        <div className='text-white grid grid-cols-12 gap-x-[10px] w-full mx-auto my-6'>
          {items.map((item)=>{
            return <InfoCard {...item} key={item.id}/>
          })}

        </div>
      )
    }
    
    export default UserInfo