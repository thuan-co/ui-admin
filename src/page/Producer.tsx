// @flow
import * as React from 'react';
import MakeProducer from '../features/common/makeProducer';
import './dashboard.css'

export default function ProducerPage() {
  return (
    <section className='brand-page'>
      <h1>Thêm thương hiệu</h1>
      <MakeProducer />
    </section>
  );
};