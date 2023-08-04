import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { productRemove, productCartAdd, productCartSubtract } from '../redux/actions/ProductAction'

const Cart = () => {
  const cartData = useSelector((state) => (state.data))
  let amount = cartData.length && cartData.map(item => (item.qty * item.price)).reduce((prev, next) => prev + next)
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
                    <td style={{ border: '1px solid blue' }}>{item.title.split(' ').slice(0, 2)}</td>
                    <td style={{ border: '1px solid blue' }}>{item.price}</td>
                    <td style={{ border: '1px solid blue' }}>{item.category}</td>
                    <td style={{ border: '1px solid blue' }}><img src={item.image} alt={item.title} style={{ width: '50px' }} /></td>
                    <td style={{ border: '1px solid blue' }}>{item.rating.rate}</td>
                    <td style={{ border: '1px solid blue' }}>
                      <button style={{ marginRight: '10px' }} disabled={item.qty === 1 ? true : false} onClick={() => dispatch(productCartSubtract(item.id))} >-</button>
                      {item.qty}
                      <button style={{ marginLeft: '10px' }} disabled={item.qty > 6 ? true : false} onClick={() => dispatch(productCartAdd(item.id))}>+</button>
                    </td>
                    <td style={{ border: '1px solid blue' }}>{item.price * item.qty}</td>
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
            <div className="adjust-price"><span>Discount</span><span>{Math.round(((amount * 7) * 100) / 100) / 100}</span></div>
            <div className="adjust-price"><span>Tax</span><span>{0.00}</span></div>
            <div className="adjust-price"><span>Total</span><span>{amount - Math.round(((amount * 7) * 100) / 100) / 100}</span></div>

          </div>
        </div>
      }
    </>
  )
}

export default Cart
