import React from 'react'
import { pitchers } from '../json/Pitchers'
import { useGlobalContext } from '../context/contextApi'

const Pitchers = () => {
  const { handleAddCart } = useGlobalContext()
return (
  <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">Our Pitchers Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-24">
        {pitchers.bottle_pitchers.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-48 h-48 object-contain mb-4" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">Capacity: {item.capacity}</p>
            <p className="text-gray-600">Material: {item.material}</p>
            <p className="text-blue-700 font-bold">₹ {item.price}</p>
            <button className='bg-amber-300 p-2 text-white rounded m-3' onClick={()=>handleAddCart(item.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Pitchers
