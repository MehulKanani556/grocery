import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevCart) => [...prevCart, item]);
    };

    const updateCart = (items) => {
        setCartItems(items);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};
