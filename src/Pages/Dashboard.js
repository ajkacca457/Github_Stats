import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  console.log(useContext(AppContext));
  return (
    <div className='bg-indigo-500 text-white py-8'>This is dashboard</div>
  )
}

export default Dashboard;