// @flow
import * as React from 'react';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../page';
import Dashboard from '../page/Dashboard';
import Employee from '../page/Employee';
import { Order } from '../page/Order';
import HomePage from '../scenes/Dashboard';

type Props = {
  
};
export function AppRouter(props: Props) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<HomePage />} />
                
            <Route path='admin' element={<Main />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='employee' element={<Employee />} />
                <Route path='order' element={<Order />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};