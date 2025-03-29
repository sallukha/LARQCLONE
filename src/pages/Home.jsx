import React from 'react';

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img 
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1920/v1742012609/assets/spa/v3/shop/hero/hero-wwd-2025.jpg" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
            
            {/* Text Overlay */}
            <div className="absolute top-1/4 left-10 md:left-20 bg-opacity-50 p-6 md:p-10 rounded-lg text-white max-w-lg">
                <h1 className="text-4xl font-bold">Drink brilliantly</h1>
                <h2 className="text-2xl font-semibold mt-2">Spring Savings – up to 20% off!</h2>
                <p className="text-lg mt-3">
                    Your water needs a serious upgrade. Save 20% off orders $150+ 
                    and save 10% off orders under $150.
                </p>

                {/* Shop Now Button */}
                <div className="mt-5">
                    <button className="flex items-center bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
                        Shop Now <span className="ml-2">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
