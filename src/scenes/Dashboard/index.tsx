import React from 'react';
import Sidebar from '../Global/Sidebar';
import Topbar from '../Global/Topbar';
import './index.css';

export default function HomePage() {
  return (
    <div className='home-page-admin-container'>

        <Sidebar />

        <div className='right-container'>
            <Topbar/>
            <div className='right-main-content'>Home page admin</div>
        </div>
       
    </div>
  );
}