import React from 'react';
import { Routes,Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/dashboard' element={<div>Home</div>}/>
            <Route path='/login' element={<div>Login</div>}/>
        </Routes>
    </>
  )
}

export default AppRoutes;