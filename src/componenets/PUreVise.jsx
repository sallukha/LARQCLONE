import React from 'react'
const PUreVise = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-full justify-center items-center p-6 md:p-12 bg-gray-100 gap-12'>
      {/* Left Text Section */}
      <div className='flex flex-col gap-16 max-w-md'>
        <div>
          <h1 className='text-xl md:text-3xl font-bold'>Nano Zero filter technology</h1>
          <p className='font-light text-gray-700 mt-2'>
            A new age of filtration is here. Enjoy crisp drinking water at home and on the go.
          </p>
        </div>
        <div>
          <h1 className='text-xl md:text-3xl font-bold'>Filtration for all</h1>
          <p className='font-light text-gray-700 mt-2'>
            A new age of filtration is here. Enjoy crisp drinking water at home and on the go.
          </p>
        </div>
      </div>
      {/* Center Image */}
      <div className='flex justify-center items-center'>
        <img
          className='w-[80%] md:w-[60%] lg:w-[50%]'
          src='https://res.cloudinary.com/larq/image/upload/q_auto/v1657116048/assets/spa/v2/tech-page/filters-tech-image.png'
          alt='Filter Technology'
        />
      </div>
      {/* Right Text Section */}
      <div className='flex flex-col gap-16 max-w-md'>
        <div>
          <h1 className='text-xl md:text-3xl font-bold mb-2'>Pure-tasting water</h1>
          <p className='font-light text-gray-700'>
            Pure-tasting water provides better-tasting coffee, tea, smoothies—everything—for a
            healthier, more sustainable lifestyle. Don’t settle for anything less.
          </p>
        </div>
      </div>

    </div>
  )
}
export default PUreVise
