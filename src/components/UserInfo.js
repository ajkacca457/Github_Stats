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
          icon:<SlUserFollowing size={25}/>,
          label:"following",
          data:following,
          bgColor:'bg-sky-400'
        },
        {
          id:2,
          icon:<GiShadowFollower size={25}/>,
          label:"followers",
          data:followers,
          bgColor:'bg-green-400'
        },
        {
          id:3,
          icon:<BiGitRepoForked size={25}/>,
          label:"Number of Repositories",
          data:public_repos,
          bgColor:'bg-red-400'
        },
        {
          id:4,
          icon:<MdOutlineSummarize size={25}/>,
          label:"gist",
          data:public_gists,
          bgColor:'bg-violet-500'
        },
      ]

      return (
        <div className='text-white grid grid-cols-12 gap-x-[5px] w-[90%] mx-auto my-[2%]'>
          {items.map((item)=>{
            return <InfoCard {...item} key={item.id}/>
          })}

        </div>
      )
    }
    
    export default UserInfo