// @flow
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import "./topbar.css";

export default function Topbar() {

  return (
    <div className='top-bar-container'>

      <div className='container-search-left'>

        <div className='input-search'>
            <SearchOutlinedIcon />
            <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="container-option-right">

        <div className="container-notification">

          <div className='btn-notification'>

            <Badge badgeContent={4} color="primary">
              <NotificationsNoneOutlinedIcon color='action'/>
            </Badge>
          </div>
          
        </div>

        <div className="container-setting">
          <div className='btn-setting'>
            <SettingsOutlinedIcon />
          </div>
        </div>

        <div className="container-personal">
          <div className='btn-personal'>
            <PersonOutlineOutlinedIcon />
          </div>
        </div>

      </div>

    </div>
  );
}