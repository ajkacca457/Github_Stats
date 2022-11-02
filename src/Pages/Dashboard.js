import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import UserDetail from '../components/UserDetail';
import Followers from '../components/Followers';
import Search from '../components/Search';
import Repos from '../components/Repos';
import Loading from '../components/Loading';
const Dashboard = () => {
const {isloading}= useContext(AppContext);

if(isloading) {
  return (
  <div className='py-8'>
    <Navbar/>
    <Search/>
    <Loading/>
  </div>
  )
}
  return (
    <div className='py-8'>
      <Navbar/>
      <Search/>
      <UserInfo/>
      <div className='grid grid-cols-2'>
        <UserDetail className="col-span-1"/>
        <Followers className="col-span-1"/>
      </div>
      <Repos/>

    </div>
  )
}

export default Dashboard;