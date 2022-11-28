// @flow
import * as React from 'react';
import './item.css'

type Device = {
    avt: string,
    name: string,
    price: string,
    updatedDate: string
};
export default function Item(props: Device) {
  return (
    <div className='item-product'>

      <div className='left-item'>
        <img src={props.avt} alt="ảnh đại diện" className='avt-item'/>
      </div>

      <div className='middle-item'>
        <h3 className='name-item'>{props.name} </h3>
        <h3 className='price-item'>{props.price} VND</h3>
        <span>Last updated: {props.updatedDate}</span>
      </div>
    </div>
  );
};