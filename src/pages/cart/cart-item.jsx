import React from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {image, name, price, id} = props.data;
    const {addToCart, removeFromCart, cartItems, updateCartItemCount} = React.useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src={image} alt={name} />
            <div className='description'>
                <p><b>{name}</b></p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} type="text" onChange={(e) => updateCartItemCount(id, e.target.value)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}
