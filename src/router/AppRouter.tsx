// @flow
import * as React from 'react';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Customer } from '../page/Customer';
import Dashboard from '../page/Dashboard';
import Employee from '../page/Employee';
import { MakeProduct } from '../page/MakeProduct';
import { Order } from '../page/Order';
import ProducerPage from '../page/Producer';
import  Product  from '../page/Product';
import HomePage from '../scenes/Dashboard';
import { ListBrands } from '../scenes/ListBrands';
import { Login } from '../page/Login';
import ProtectedRouter from './Protected';
import CustomBrowserRouter from './CustomBrowserRouter';


export function AppRouter() {
  return (
    // <BrowserRouter>
    
      <Routes>
        <Route path='/' index element={<Login />} />
        
        <Route path='/admin'  element={<HomePage />}>
        {/* <Route path='/admin'  element={<ProtectedRouter />}> */}

            <Route path='dashboard'  element={<Dashboard />} />
            <Route path='employee' element={<Employee />} />
            <Route path='order' element={<Order />} />
            <Route path='customer' element={<Customer />} />
            <Route path='product/list' element={<Product />} />
            <Route path='producer/add' element={<ProducerPage />} />
            <Route path='producers' element={<ListBrands />} />
            <Route path='product/add' element={<MakeProduct />} />
        </Route>
      </Routes>
    // </BrowserRouter>
  );
};