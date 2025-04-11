import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../json/JsonApi';
import { useGlobalContext } from '../context/contextApi';
const ShowProduct = () => {
    const { id } = useParams();
    const { handleAddCart } = useGlobalContext()
    const allProducts = [...products.bottles, ...products.pitchers || []];
    // Merge all product arrays if multiple categories exist
    const product = allProducts.find(item => item.id.toString() === id);
    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold">Product not found!</p>
            </div>
        );
    }
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="p-4 border rounded shadow-md text-center">
                <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mx-auto" />
                <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-semibold mt-1">${product.price}</p>
                <button onClick={() => handleAddCart(product.id)} className='bg-amber-800 p-2 text-white rounded m-2'>by now</button>
            </div>
        </div>
    );
};

export default ShowProduct;
