    import React from 'react'
    import { useContext } from 'react';
    import { AppContext } from '../context/AppContext';
    import { SlUserFollowing } from 'react-icons/sl';
    import {BiGitRepoForked} from 'react-icons/bi';
    import {MdOutlineSummarize} from 'react-icons/md';
    import {GiShadowFollower} from 'react-icons/gi';


    
    const UserInfo = () => {
      const {gituser : {
        following,followers,public_repos,public_gists
      }}=(useContext(AppContext));
      console.log(following,followers,public_repos,public_gists);

      const items= [
        {
          id:1,
          icon:<SlUserFollowing size={35}/>,
          data:following
        },
        {
          id:2,
          icon:<GiShadowFollower size={35}/>,
          data:followers
        },
        {
          id:3,
          icon:<BiGitRepoForked size={35}/>,
          data:public_repos
        },
        {
          id:4,
          icon:<MdOutlineSummarize size={35}/>,
          data:public_gists
        },
      ]

      return (
        <div className='bg-indigo-300 text-white grid grid-cols-12'>
          {items.map((item)=>{
            return <div className="col-span-3 place-self-center">{item.icon}</div>
          })}

        </div>
      )
    }
    
    export default UserInfo