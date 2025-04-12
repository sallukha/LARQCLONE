import React from 'react'
import { pitchers } from '../json/Pitchers'
import { useGlobalContext } from '../context/contextApi'
const Pitchers = () => {
  const { handleAddCart } = useGlobalContext()
  return (
    <div className="px-4 py-8 md:px-10 lg:px-16 my-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
        Our Pitchers Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pitchers.bottle_pitchers.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md p-5 bg-white flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{item.name}</h2>
            <p className="text-gray-600 text-sm">Capacity: {item.capacity}</p>
            <p className="text-gray-600 text-sm">Material: {item.material}</p>
            <p className="text-blue-700 font-bold text-lg mt-2">₹ {item.price}</p>
            <button
              className="bg-amber-400 text-white px-5 py-2 rounded mt-4 hover:bg-amber-500 transition"
              onClick={() => handleAddCart(item.id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pitchers
