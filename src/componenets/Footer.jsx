import React from 'react';
import { CiFacebook, CiYoutube, CiTwitter } from "react-icons/ci"; 
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700 w-full">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-24">
                {/* Left: Newsletter & Social */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">Become an insider</h2>
                    <p className="text-sm mb-1">Receive exclusive offers, hydration news,</p>
                    <p className="text-sm mb-3">and more when you subscribe.</p>
                    <div className="flex items-center w-full md:w-2/3 mt-4 bg-white rounded-2xl border border-gray-400 overflow-hidden shadow-sm">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 outline-none bg-transparent text-sm"
                        />
                        <button className="p-3 text-gray-300 hover:text-white hover:bg-amber-10 transition-all">
                            <FaArrowRightLong className="text-lg" />
                        </button>
                    </div>

                    <div className="flex gap-5 mt-6 text-2xl text-gray-600">
                        <CiFacebook className="hover:text-blue-500 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <CiYoutube className="hover:text-red-500 cursor-pointer" />
                        <CiTwitter className="hover:text-blue-400 cursor-pointer" />
                    </div>
                </div>
                {/* Middle: Footer Links */}
                <div className="flex-[0.5] grid grid-cols-2 gap-12">
                    <ul className="space-y-2 my-8">

                        <li>Reviews</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Warranty</li>
                    </ul>
                    <ul className="space-y-2 my-8">
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                {/* Right: Image */}
                <div className="flex-1 hidden md:block justify-end">
                    <div
                        className="w-full h-full bg-cover bg-right rounded-lg "
                    >
                        <img className=' mx-28  w-[60%]' src="https://res.cloudinary.com/larq/image/upload/v1737119507/v3-images/footer/bicycle-static.jpg" alt="" />

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
