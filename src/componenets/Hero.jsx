import React from 'react';
const Hero = () => {
    return (
        <div className="w-full flex justify-center   mt-20 ">
            <div className="w-full max-w-screen-xl h-[40vh] overflow-hidden relative">
                <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1920/v1742012609/assets/spa/v3/shop/hero/hero-wwd-2025.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center  bg-black/40 text-white px-6 text-center">
                    <h1 className="text-2xl font-bold max-w-2xl">
                        Spring clean your hydration.<br />
                        Spend more, save more! Get <span className="text-yellow-400">20% off</span> orders $150+,
                        or get <span className="text-yellow-400">10% off</span> orders under $150.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
