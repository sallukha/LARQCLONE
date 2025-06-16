import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/contextApi";

const AddToCart = () => {
  const { cart, isOpen, SetIsOpen, handleDecrement, handleIncrement } = useGlobalContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // ✅ Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => console.error("Razorpay SDK failed to load.");
    document.body.appendChild(script);
  }, []);

  const handleClickPayment = async () => {
    if (isProcessing || !isRazorpayLoaded) {
      alert("Payment system not ready. Please try again.");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await axios.post("http://localhost:5000/payment/checkout", {
        name: "Product Checkout",
        amount: totalAmount * 100, // Convert to paise
      });

      const { order } = res.data;

      const options = {
        key: "rzp_test_YbBZ9UxIkaF0Pf",
        amount: order.amount,
        currency: order.currency,
        name: "E-Commerce App",
        description: "Product Checkout",
        order_id: order.id,
        callback_url: "http://localhost:5000/payment/payment-verification",
        prefill: {
          name: "Sallu Khan",
          email: "sallu.khan@example.com",
          contact: "9000090000",
        },
        theme: {
          color: "#3399cc",
        },
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          // TODO: clear cart or redirect if needed
        },
        modal: {
          ondismiss: function () {
            console.log("Payment modal dismissed by user.");
            alert("Payment process was cancelled.");
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg p-5 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-red-500 transition"
        onClick={() => SetIsOpen(false)}
      >
        ✖
      </button>

      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>

      {cart.length > 0 ? (
        <div className="flex flex-col justify-between h-[90%]">
          <div className="space-y-4 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b py-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                  <p className="text-sm text-green-600 font-semibold">
                    Total: ₹{item.price * item.quantity}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                      disabled={item.quantity <= 1}
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

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-bold text-right">Grand Total: ₹{totalAmount.toFixed(2)}</h3>
            <button
              className="bg-amber-400 p-2 rounded w-full mt-4 hover:bg-amber-500 transition"
              onClick={handleClickPayment}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Pay"}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">No items in cart</p>
      )}
    </div>
  );
};

export default AddToCart;
