import React from 'react';
import Sidebar from '../Global/Sidebar';
import Topbar from '../Global/Topbar';

export default function HomePage() {
  return (
    <div>
        <Sidebar />
        <Topbar />
        <h1>Home page admin</h1>
    </div>
  );
}