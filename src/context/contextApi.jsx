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
                return prevCart;
            } else {
                const productToAdd = products.bottles.find((item) => item.id === productId);
                return productToAdd ? [...prevCart, productToAdd] : prevCart;
            }
        });
    };

    return (
        <GlobeContext.Provider value={{ cart, setCart, handleAddCart, isOpen, SetIsOpen }}>
            {children}
            {isOpen && <AddToCart />}
        </GlobeContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobeContext);
};

export { GlobalProvider, useGlobalContext };
