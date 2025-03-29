import React from "react";
import { useGlobalContext } from "../context/contextApi";

const AddToCart = () => {
    const { cart, isOpen, SetIsOpen } = useGlobalContext();

    return (
        <div
            className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-lg p-5 transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* Close Button */}
            <button
                className="absolute top-3 right-4 text-gray-600 text-xl"
                onClick={() => SetIsOpen(false)}
            >
                ✖
            </button>

            {/* Cart Header */}
            <h2 className="text-lg font-semibold mb-4">Cart Items</h2>

            {/* Cart Items */}
            {cart.length > 0 ? (
                cart.map((item) => (
                    <div key={item.id} className="border-b py-2">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No items in cart</p>
            )}
        </div>
    );
};

export default AddToCart;
