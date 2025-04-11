import React from 'react';
import HomeHero from '../componenets/HomeHero';
import HomeHero2 from '../componenets/HomeHero2';
const Home = () => {
    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center">
                <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1920/v1742012609/assets/spa/v3/shop/hero/hero-wwd-2025.jpg"
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-opacity-60 p-6 md:p-10 rounded-lg text-white max-w-lg text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">Drink brilliantly</h1>
                    <h2 className="text-xl md:text-3xl font-semibold mt-2">Spring Savings – up to 20% off!</h2>
                    <p className="text-lg mt-3">
                        Your water needs a serious upgrade. Save 20% off orders $150+
                        and save 10% off orders under $150.
                    </p>
                    <div className="mt-5">
                        <button className="flex items-center bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
                            Shop Now <span className="ml-2">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 md:px-10 py-10">
                <HomeHero />
                <HomeHero2 />
            </div>
        </>
    );
}

export default Home;
