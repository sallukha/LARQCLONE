import React from 'react';
import HomeHero from '../componenets/HomeHero';
import HomeHero2 from '../componenets/HomeHero2';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
                <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1920/v1742012609/assets/spa/v3/shop/hero/hero-wwd-2025.jpg"
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-black bg-opacity-60 p-6 sm:p-8 md:p-10 rounded-lg text-white max-w-[90%] sm:max-w-[80%] md:max-w-lg text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                        Drink brilliantly
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mt-3">
                        Spring Savings – up to 20% off!
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mt-4">
                        Your water needs a serious upgrade. Save 20% off orders $150+
                        and save 10% off orders under $150.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <button className="flex items-center bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
                            Shop Now <span className="ml-2 text-xl sm:text-2xl">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Components Section */}
            <div className="w-full px-4 sm:px-6 md:px-10 py-10 bg-white">
                <HomeHero />
                <HomeHero2 />
            </div>
        </>
    );
}

export default Home;
