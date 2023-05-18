import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { productList, productAdd, productRemove, productSearch } from '../redux/actions/ProductAction'
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.product);
  let cart = useSelector((state) => state.data.data);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  useEffect(() => {
    setFilterData(data);
}, [data])

const searchData = (e) => {
  const search = e.target.value;
  const modifiedData = data.filter((item) => item.title.includes(search) || item.price.toString().includes(search))
  setFilterData(modifiedData);
}
  return (
    <>
      <div className='text-center top'>
        <Link to="/cart" >Go to Cart</Link>
        <span className='cart-number'>{cart.length}</span>
      </div>
      <div className='text-center top'>
        <input type="text" onChange={(e) => searchData(e)} placeholder='Search Product' />
      </div>
      <div className='flex-product'>
        {
          filterData.map((item) =>
            <div key={item.id} className='product'>
              <div className='row'>Title : {item.title}</div>
              <div className='row'>Price : {item.price}</div>
              <div className='row'>Category : {item.category}</div>
              <div className='row'><img src={item.image} alt={item.title} className='image' /></div>
              <div className='row'>Rate : {item.rating.rate}</div>
              <div>
                <button onClick={() => dispatch(productAdd(item))}>Add to Cart</button>
                <button onClick={() => dispatch(productRemove(item.id))}>Remove form Cart</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default List