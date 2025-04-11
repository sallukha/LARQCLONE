import React, { useEffect, useState } from "react";
import { products } from "../json/JsonApi";
import { useGlobalContext } from "../context/contextApi";
const ShopAll = () => {
    const uniqueBrands = [...new Set(products.bottles.map((bottle) => bottle.brand))];
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(products.bottles);
    const { handleAddCart } = useGlobalContext();
    useEffect(() => {
        if (selectedBrand) {
            setFilteredProducts(products.bottles.filter((bottle) => bottle.brand === selectedBrand));
        } else {
            setFilteredProducts(products.bottles);
        }
    }, [selectedBrand]);
    return (
        <>
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
            <div className="p-10 md:p-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">Bottles</h1>
                <h2 className="text-lg md:text-2xl text-gray-600 text-center mt-2">
                    Haven't found your emotional support water bottle yet? Browse water bottles that fit your needs here.
                </h2>

                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">Brands</h2>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        <button
                            onClick={() => setSelectedBrand(null)}
                            className={`px-5 py-2 rounded-full shadow-md font-medium ${selectedBrand === null ? "bg-black text-white" : "bg-gray-200"
                                }`}
                        >
                            All Brands
                        </button>
                        {uniqueBrands.map((brand, index) => (
                            <button
                                onClick={() => setSelectedBrand(brand)}
                                key={index}
                                className={`px-5 py-2 rounded-full shadow-md font-medium transition-transform duration-300 ${selectedBrand === brand ? "bg-blue-500 text-white" : "bg-gray-200"
                                    }`}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottle Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((bottle) => (
                            <div key={bottle.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img src={bottle.image} alt={bottle.name} className="w-full rounded-lg" />
                                <h3 className="text-xl font-semibold text-gray-800 mt-3">{bottle.name}</h3>
                                <p className="text-gray-500">{bottle.capacity} - {bottle.color}</p>
                                <p className="text-green-600 font-bold text-lg mt-2">${bottle.price}</p>
                                <button
                                    className="bg-purple-900 p-2 rounded-2xl mt-3 text-white"
                                    onClick={() => handleAddCart(bottle.id)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-xl text-gray-500 col-span-full">No products found</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShopAll;
