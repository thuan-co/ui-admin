// @flow
import * as React from 'react';
import MakePhone from '../features/common/makePhone';
// import { MakePhone } from '../features/common/makePhone';
import './index.css';

export function MakeProduct() {
  return (
    <section className='make-products-container'>
      <h1>trang nay them san pham</h1>

      <MakePhone />
      
    </section>
  );
};