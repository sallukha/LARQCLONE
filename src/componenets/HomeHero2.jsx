import React, { useRef } from 'react';
import { products } from '../json/JsonApi';
const HomeHero2 = () => {
    const sliderRef = useRef();
    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="p-3">
                <h1 className='text-4xl'>Now Trending</h1>
            </div>
            <div className="relative py-7">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-1 rounded-full"
                >
                    ⟨
                </button>
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto space-x-4 px-10 scroll-smooth scrollbar-hide"
                >
                    {products.bottles.map((bottle) => (
                        <div
                            key={bottle.id}
                            className="min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0"
                        >
                            <img
                                src={bottle.image}
                                alt={bottle.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold">{bottle.name}</h2>
                                <p className="text-gray-600">{bottle.description}</p>
                                <p className="text-gray-800 font-semibold">${bottle.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-1 rounded-full"
                >
                    ⟩
                </button>
            </div>
            <div className="flex  items-center w-full py-12 justify-between p-5 bg-gray-200 rounded">
                <div className="flex flex-col items-start w-[50%] space-y-5">
                    <h1 className='text-2xl md:text-6xl font-bold'>Limited Drops</h1>
                    <h1>Don't let sold out happen to you. Limited Colors drop periodically — sign up for updates!</h1>
                    <button className='bg-gray-900 p-3 text-white rounded-full'>Chek it out</button>
                </div>
                <img
                    className="w-[40%] h-auto object-cover"
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1723717866/assets/spa/v3/shop/banner/limited_drop_promo-phase_3_d.png"
                    alt="Limited Drop Promo"
                />
            </div>

            <div className="flex justify-between items-center gap-4 flex-wrap p-16">
                <div className="div">
                    <img
                        className="w-100 h-auto object-cover rounded shadow-md"
                        src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1727167393/Homepage-v3/refresh-homepage-photos/hp-shop-section/pv-2-black-bottle-small.jpg"
                        alt="Black Bottle"
                    />
                    <h1 className='text-3xl md:text-5xl font-bold items-center flex text-center mx-21 my-2'>Bottles</h1>
                </div>
                <div className="items-center">
                    <img
                        className="w-100 h-auto object-cover rounded shadow-md"
                        src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1727167393/Homepage-v3/refresh-homepage-photos/hp-shop-section/sipping-water-from-pitcher.jpg"
                        alt="Sipping Water"
                    />
                    <div className="text-3xl md:text-5xl font-bold items-center flex text-center mx-21 my-2">
                        <h1>Pitchers</h1>
                    </div>

                </div>
                <div className="d">
                    <img
                        className="w-100 h-auto object-cover rounded shadow-md"
                        src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1732571867/Homepage-v3/refresh-homepage-photos/hp-shop-section/larq-bottles-outdoore.jpg"
                        alt="Outdoor Bottles"
                    />
                    <div className="text-3xl md:text-5xl font-bold items-center flex text-center mx-18 my-2">
                        <h1 className=''>Accessorice</h1>
                    </div>

                </div>
            </div>
        </>
    );
};
export default HomeHero2;
