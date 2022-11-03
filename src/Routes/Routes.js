import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Error from '../Pages/Error';
import PrivateRoute from './PrivateRoute';
import AuthWrapper from './AuthWrapper';

const AppRoutes = () => {
  return (
    <>
    <AuthWrapper>
        <Routes>
            <Route path='/' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
            }/>
            <Route path='login' element={<Login/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </AuthWrapper>
    </>
  )
}

export default AppRoutes;