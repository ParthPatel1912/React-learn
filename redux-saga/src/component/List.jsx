import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { productList, productAdd, productRemove, productSearch } from '../redux/actions/ProductAction'
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.product);
  let cart = useSelector((state) => state.data);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  useEffect(() => {
    const newData = data.map((item) => {
      return {
        ...item,
        qty: 1
      }
    })
    setFilterData(newData);
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
        <Link to="/cart"><span className='cart-number'>{cart.length}</span></Link>
      </div>
      <div className='text-center top'>
        <input type="text" onChange={(e) => searchData(e)} placeholder='Search Product' />
      </div>
      <div className='flex-product'>
        {
          filterData.map((item) =>
            <div key={item.id} className='product'>
              <div className='row'>Title : {item.title.split(' ').slice(0,2)}</div>
              <div className='row'>Price : {item.price}</div>
              <div className='row'>Category : {item.category.split(' ').slice(0,1)}</div>
              <div className='row'><img src={item.image} alt={item.title} style={{width: '80%'}} className='image' /></div>
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