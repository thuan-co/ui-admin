// @flow
import React from 'react';
import './side.css'
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='side-bar-left'>

      <div className='avatar-container'>
          <div className='avatar-img'>
            <img src="https://images.unsplash.com/photo-1620710550338-de30c7633ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Ảnh đại diện" />
          </div>

          <h3 className='title-role'>
            SUPER ADMIN
          </h3>
          <h4>Nguyễn Thuận</h4>
      </div>
       
      <div className='dashboard-container'>

        <h5>Dashboard</h5>

        <div className='btn-items'>
          <CardTravelOutlinedIcon className='btn-icon'/>
          <button><Link to="admin/dashboard">Kinh doanh</Link></button>
        </div>

      </div>

      <div className='manager-container'>
        <h5>Quản lý</h5>

        <div className='btn-items'>

          <GroupOutlinedIcon />
          <button><Link to="admin/employee" >Nhân viên </Link></button>
        </div>

        <div className='btn-items'>
        <ShoppingCartOutlinedIcon />
          
          <button><Link to="admin/order">Đơn hàng</Link></button>
        </div>

        <div className='btn-items'>

          <LocalMallOutlinedIcon />
          <button><Link to="admin/customer">Khách hàng</Link></button>
        </div>

      </div>

    </div>
  );
}