import React from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, name, description, price, image} = props.data;
    const {addToCart, cartItems} = React.useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className='product'>
            <img src={image} alt={name} />
            <div className='description'>
                <p><b>{name}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to cart { cartItemAmount > 0 ? `(${cartItemAmount})` : '' }
            </button>
        </div>
    )
}
