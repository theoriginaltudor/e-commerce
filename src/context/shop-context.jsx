import React, { createContext } from 'react'
import { useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let product of PRODUCTS) {
        cart[product.id] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (id) => {
        setCartItems((prevCartItems) => {
            return {...prevCartItems, [id]: prevCartItems[id] + 1}
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prevCartItems) => {
            return {...prevCartItems, [id]: prevCartItems[id] - 1}
        })
    }

    const clearCart = () => {
        setCartItems(getDefaultCart());
    }

    const updateCartItemCount = (id, count) => {
        setCartItems((prevCartItems) => {
            return {...prevCartItems, [id]: count}
        })
    }

    const contextValue = {
        cartItems: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        updateCartItemCount: updateCartItemCount
    }

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
