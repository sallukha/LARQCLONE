import React from "react";
import { useGlobalContext } from "../context/contextApi";

const AddToCart = () => {
    const { cart, isOpen, SetIsOpen, handleDecrement, handleIncrement } = useGlobalContext();

    return (
        <div
            className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg p-5 transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-red-500 transition"
                onClick={() => SetIsOpen(false)}
            >
                ✖
            </button>

            {/* Cart Header */}
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>

            {/* Cart Items */}
            {cart.length > 0 ? (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border-b py-3">
                            {/* Image */}
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />

                            {/* Item Details */}
                            <div className="flex-1">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">${item.price}</p>

                                {/* Quantity Buttons */}
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                                        disabled={item.quantity <= 1} // Prevents decrementing below 1
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-10">No items in cart</p>
            )}
        </div>
    );
};

export default AddToCart;
