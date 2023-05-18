import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { productRemove } from '../redux/actions/ProductAction'

const Cart = () => {
  const cartData = useSelector((state) => (state.data.data))
  const qty = useSelector((state) => (state.data.qty))
  let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
  const dispatch = useDispatch();
  return (
    <>
      <div className='text-center'>
        <Link to="/">Back</Link>
      </div>
      {
        cartData.length > 0 &&
        <div>
          <table>
            <thead>
              <tr>
                <th style={{ border: '1px solid blue' }}>title</th>
                <th style={{ border: '1px solid blue' }}>price</th>
                <th style={{ border: '1px solid blue' }}>category</th>
                <th style={{ border: '1px solid blue' }}>image</th>
                <th style={{ border: '1px solid blue' }}>rating</th>
                <th style={{ border: '1px solid blue' }}>Qty</th>
                <th style={{ border: '1px solid blue' }}>Total</th>
                <th style={{ border: '1px solid blue' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.map((item) =>
                  <tr key={item.id}>
                    <td style={{ border: '1px solid blue' }}>{item.title}</td>
                    <td style={{ border: '1px solid blue' }}>{item.price}</td>
                    <td style={{ border: '1px solid blue' }}>{item.category}</td>
                    <td style={{ border: '1px solid blue' }}><img src={item.image} alt={item.title} style={{ width: '50px' }} /></td>
                    <td style={{ border: '1px solid blue' }}>{item.rating.rate}</td>
                    <td style={{ border: '1px solid blue' }}>67676</td>
                    <td style={{ border: '1px solid blue' }}>djbhgkdfuhgdfuky</td>
                    <td style={{ border: '1px solid blue' }}>
                      <span><button onClick={() => dispatch(productRemove(item.id))}>Delete</button></span>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
      <div className="price-details">
        <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
        <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
        <div className="adjust-price"><span>Tax</span><span>000</span></div>
        <div className="adjust-price"><span>Total</span><span>{amount - (amount / 10)}</span></div>

      </div>
        </div>
      }
    </>
  )
}

export default Cart
