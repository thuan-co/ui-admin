import React from 'react';
import HomePage from "./scenes/Dashboard/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes> 
      
    </BrowserRouter>
  );
}

export default App;
