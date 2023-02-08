// @flow
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../app/store';
import HomePage from '../scenes/Dashboard';
import { ACCESS_TOKEN } from '../features/redux-saga/auth/loginSaga';

const useAuth =()=> {
    const isAuth = Boolean(localStorage.getItem(ACCESS_TOKEN))
    return isAuth
}

export default function ProtectedRouter() {

    const auth = useAuth()
    // return auth?<HomePage />:<Login />
    return auth? <HomePage /> : <Navigate to='/' replace />
};