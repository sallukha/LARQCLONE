import React, { createContext, useContext, useState } from "react";
import AddToCart from "../componenets/AddToCart";
import { products } from "../json/JsonApi";

const GlobeContext = createContext();

const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isOpen, SetIsOpen] = useState(false);
    const handleAddCart = (productId) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.id === productId);
            if (itemExists) {
                return prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                const productToAdd = products.bottles.find((item) => item.id === productId);
                return productToAdd ? [...prevCart, { ...productToAdd, quantity: 1 }] : prevCart;
            }
        });
    };
    const handleIncrement = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const handleDecrement = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) 
        );
    };
    return (
        <GlobeContext.Provider
            value={{ cart, setCart, handleAddCart, isOpen, SetIsOpen, handleDecrement, handleIncrement }}
        >
            {children}
            {isOpen && <AddToCart />}
        </GlobeContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobeContext);
};

export { GlobalProvider, useGlobalContext };
