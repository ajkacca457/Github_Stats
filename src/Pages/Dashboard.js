import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import User from '../components/User';
import Search from '../components/Search';
import Repos from '../components/Repos';
const Dashboard = () => {
  console.log(useContext(AppContext));
  return (
    <div className='py-8'>
      <Navbar/>
      <Search/>
      <UserInfo/>
      <User/>
      <Repos/>

    </div>
  )
}

export default Dashboard;