// @flow
import * as React from 'react';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Customer } from '../page/Customer';
import Dashboard from '../page/Dashboard';
import Employee from '../page/Employee';
import { Order } from '../page/Order';
import ProducerPage from '../page/Producer';
import  Product  from '../page/Product';
import HomePage from '../scenes/Dashboard';
import { ListBrands } from '../scenes/ListBrands';

type Props = {
  
};
export function AppRouter(props: Props) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<HomePage />}>
                
                <Route path='admin/dashboard' index element={<Dashboard />} />
                <Route path='admin/employee' element={<Employee />} />
                <Route path='admin/order' element={<Order />} />
                <Route path='admin/customer' element={<Customer />} />
                <Route path='admin/product/list' element={<Product />} />
                <Route path='admin/producer/add' element={<ProducerPage />} />
                <Route path='admin/producers' element={<ListBrands />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};