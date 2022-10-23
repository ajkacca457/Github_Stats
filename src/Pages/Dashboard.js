import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import UserDetail from '../components/UserDetail';
import Followers from '../components/Followers';
import Search from '../components/Search';
import Repos from '../components/Repos';
const Dashboard = () => {
  return (
    <div className='py-8'>
      <Navbar/>
      <Search/>
      <UserInfo/>
      <UserDetail/>
      <Followers/>
      <Repos/>

    </div>
  )
}

export default Dashboard;