// @flow
import React, {useEffect, useState} from 'react';
import HookAPI from '../constants/HookAPI';
import Item from '../features/common/item';
import * as methodTypes from '../constants/method.httprequest'
import axios from 'axios';
type Props = {
  
};
export default function Product(props: Props) {

  const [filters, setFilter] = useState("Máy tính")
  
  useEffect(() => {
    // do you side effect here ...
    console.log("Loading data from store...")

    axios.get("http://localhost:8080/api/v1/items")
    .then((req => {
      if (req.status === 200) {
        console.log("Lấy được dũ liệu từ database", req.data)

      }
    })
    )

    // const [result, error] = await HookAPI('/items',null, methodTypes.GET)

  }, [filters])

  return (
    //useEffect
    <section className='list-products-container'>
      <div className='list-content-products'>
        
        <Item avt='https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-crosshair-15-b12uez-460vn-1_68062b63393b441ab293e4758fae2077.png' name="Laptop Gaming MSI Crosshair 15 B12UEZ 460VN" price="100.000" updatedDate="22/12/2022" />

        <Item avt='https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-crosshair-15-b12uez-460vn-1_68062b63393b441ab293e4758fae2077.png' name="Laptop Gaming MSI Crosshair 15 B12UEZ 460VN" price="100.000" updatedDate="22/12/2022" />
        
        <Item avt='https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-crosshair-15-b12uez-460vn-1_68062b63393b441ab293e4758fae2077.png' name="Laptop Gaming MSI Crosshair 15 B12UEZ 460VN" price="100.000" updatedDate="22/12/2022" />

      </div>
    </section>
  );
};