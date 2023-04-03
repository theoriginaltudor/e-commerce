import React from 'react'
import './cart.css'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';

export const Cart = () => {
  const {cartItems} = React.useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1> Your cart items </h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>
    </div>
  )
}
