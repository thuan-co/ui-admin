import React from 'react';
import { Outlet } from 'react-router-dom';
// import { AppRouter } from '../../router/AppRouter';
import Sidebar from '../Global/Sidebar';
import Topbar from '../Global/Topbar';
// import './index.css';

export default function HomePage() {
  return (
    <div className='home-page-admin-container'>

        <Sidebar />
        <Outlet />
        <Topbar />

        
       
    </div>
  );
}