// @flow
import React from 'react';
import './side.css'
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Sidebar() {

  const [open, setOpen] = React.useState(false);

  const handleClickProducer = () => {
    setOpen(!open);
  };

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

      <div className='product-container'>
        <h5>Sản phẩm</h5>

        <List component="div" className='option-items'>

          <Link to="/admin/product/add">
            <ListItemButton className='li-btn'>    
              <AddCircleOutlineOutlinedIcon />
            <ListItemText className='item-content' primary="Thêm" />
            </ListItemButton>
          </Link>
          
          <Link to="/admin/product/list">
            <ListItemButton className='li-btn'>
              <FormatListBulletedOutlinedIcon />
              <ListItemText className='item-content' primary="Danh sách"/>
            </ListItemButton>
          </Link>

          <ListItemButton className='li-btn' id='brand-list-btn' onClick={handleClickProducer}>
            <BusinessOutlinedIcon />
            <ListItemText className='item-content' primary="Nhà sản xuất" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit >
            <List component="div" disablePadding >

              <Link to="/admin/producer/add">
                <ListItemButton sx={{ pl: 4 }} >
                  {/* <ListItemIcon> */}
                    <AddCircleOutlineOutlinedIcon />
                  {/* </ListItemIcon> */}
                  <ListItemText className='item-content' primary="Thêm"/>
                </ListItemButton>
              </Link> 

              <Link to="admin/producers">
                <ListItemButton sx={{ pl: 4 }} >
                  {/* <ListItemIcon> */}
                    <FormatListBulletedOutlinedIcon />
                  {/* </ListItemIcon> */}
                  <ListItemText className='item-content' primary="Danh sách"/>
                </ListItemButton>
              </Link> 
            </List>
          </Collapse>
        </List>

      </div>
    </div>
  );
}