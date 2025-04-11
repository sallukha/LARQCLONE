import React, { useRef } from 'react'
import NanoFilter from '../componenets/NanoFilter'
import PUreVise from '../componenets/PUreVise'
const Technology = () => {
  const menuList = ["Discover", "Nano Zero", "PureVis", "Smart Hydration", "References"]
  const sliderRef = useRef()
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: 'smooth',
    })
  }
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {/* Navbar */}
      {/* Navigation Bar */}
      <nav className='flex justify-center bg-white text-black py-4 px-2 mt-14'>
        <ul className='flex flex-wrap justify-center gap-3 md:gap-6 font-bold text-sm sm:text-base md:text-lg'>
          {menuList.map((item, index) => (
            <li key={index} className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Responsive Heading */}
      <div className="flex justify-center items-center mb-6 px-4">
        <h1 className='text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-center max-w-3xl'>
          We've done the science to help you drink brilliantly
        </h1>
      </div>
      {/* Image Slider Section */}
      <div className="relative px-6">
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className=" absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md px-4 py-2 rounded-full text-xl"
          >
            ⟨
          </button>

          {/* Scrollable Images */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-0 md:px-12"
          >
            <img
              className="min-w-[400px] h-auto rounded-xl shadow-lg"
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1727167393/Homepage-v3/refresh-homepage-photos/hp-shop-section/pv-2-black-bottle-small.jpg"
              alt="Hydrotech Bottle"
            />
            <img
              className="min-w-[400px] h-auto rounded-xl shadow-lg"
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1727167393/Homepage-v3/refresh-homepage-photos/hp-shop-section/sipping-water-from-pitcher.jpg"
              alt="ThermoSense"
            />
            <img
              className="min-w-[400px] h-auto rounded-xl shadow-lg"
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1732571867/Homepage-v3/refresh-homepage-photos/hp-shop-section/larq-bottles-outdoore.jpg"
              alt="GlowSip"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="  absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md px-4 py-2 rounded-full text-xl"
          >
            ⟩
          </button>
        </div>
      </div>
      {/* Subheading */}
      <div className="text-2xl md:text-4xl mx-9 my-6 p-5 font-semibold">
        <h1>02 See it in action</h1>
      </div>
      {/* Video Section */}
      <div className="w-full  max-w-screen-xl mx-auto px-6 p-7">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Video 1 */}
          <div className="w-full md:w-1/2 bg-gray-200  shadow-md">
            <video
              className="w-full shadow"
              controls
              src="https://res.cloudinary.com/larq/video/upload/v1656352240/assets/spa/v2/tech-page/LARQ_Bottle_Filtered_Blue_Water_Demo_FINAL"
            />
            <h1 className='text-xl md:text-2xl p-16 font-semibold mx-18' >LARQ vs. other water bottles</h1>
          </div>
          {/* Video 2 */}
          <div className="w-full md:w-1/2 bg-gray-200  shadow-md">
            <video
              className="w-full  shadow"
              controls
              src="https://res.cloudinary.com/larq/video/upload/v1668513159/assets/spa/v2/tech-page/LARQ_Pitcher_Demo_3_1920_opt"
            />
            <h1 className='text-xl md:text-2xl p-16 font-semibold mx-18 '>LARQ vs. other water pitchers</h1>
          </div>
        </div>
      </div>
      <div className="p-16">
      <NanoFilter/>
      <PUreVise/>
      </div>
      
    </>
  )
}
export default Technology
