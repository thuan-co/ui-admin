// @flow
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import Item from '../features/common/item';
import { productAction } from '../features/redux-saga/productSlice';
type Props = {
  
};
export default function Product(props: Props) {

  const dispatch = useAppDispatch()

  // const [filters, setFilter] = useState("Máy tính")
  const isGetData = useRef(true)
  useEffect(() => {

     // do you side effect here ...
    if (isGetData.current) {
      isGetData.current = false
      console.log("Loading data from store...")

      dispatch(productAction.fetchDataLaptop(true))
      // axios.get("http://localhost:8080/api/v1/items")
      // .then((req => {

      //   if (req.status === 200) {

      //     console.log("Lấy được dũ liệu từ database", req.data)

      //   }
      // }))
    }
    // const [result, error] = await HookAPI('/items',null, methodTypes.GET)

  }, [])

  const select = useSelector((state:RootState) => state.product.laptopsCurrent)


  return (
    
    <section className='list-products-container'>
      <div className='list-content-products'>

        {select?.map((item, index) => {
          return (
            // <Item key={index} avt={item.avt} name={item.name} price={item.price} updatedDate={item.updated_date}/>
            <Item key={index} {...item}/>
          )
        })}
        
      </div>
    </section>
  );
};