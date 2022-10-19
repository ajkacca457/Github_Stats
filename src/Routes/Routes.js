import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Error from '../Pages/Error';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes;