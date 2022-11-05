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
  <div className='h-[100vh]'>
    <Navbar/>
    <Search/>
    <Loading/>
  </div>
  )
}
  return (
    <div>
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