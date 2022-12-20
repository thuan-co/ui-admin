
// @flow
import * as React from 'react';
import HomePage from '../scenes/Dashboard';
import { Login } from '../page/Login';
import { Navigate } from 'react-router-dom';

const useAuth =()=> {

    const dump = false
    return dump
}

export default function ProtectedRouter() {

    const auth = useAuth()
    // return auth?<HomePage />:<Login />
    return auth? <Navigate to='/admin' replace /> : <Navigate to='/' replace />
};