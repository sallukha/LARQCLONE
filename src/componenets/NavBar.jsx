import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useGlobalContext } from "../context/contextApi";
import { Link } from "react-router-dom";
const NavBar = () => {
    const { isOpen, SetIsOpen, cart } = useGlobalContext();
    const [isMenuOpen, setMenuIsOpen] = useState(false);
    const leftNavLinks = [
       
        { name: "PITCHERS", path: "/pitchers" },
        { name: "SHOP ALL", path: "/shopall" },
    ];
    const rightNavLinks = [
        { name: "TECHNOLOGY", path: "/tech" },
        { name: "WATER QUALITY", path: "/water" },
    ];
    return (
        <nav className="fixed top-0 w-full bg-white flex justify-between items-center px-6 py-3 z-50 ">
            <ul className="hidden md:flex space-x-6 text-blue-400 font-mono">
                {leftNavLinks.map((link) => (
                    <Link key={link.name} to={link.path}>
                        <li className="hover:text-blue-600 transition">{link.name}</li>
                    </Link>
                ))}
            </ul>
            {/* Center (Logo) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
                <Link to="/">LARQ</Link>
            </div>
            <div className="flex items-center space-x-6">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-blue-400 font-mono">
                    {rightNavLinks.map((link) => (
                        <Link key={link.name} to={link.path}>
                            <li className="hover:text-blue-600 transition">{link.name}</li>
                        </Link>
                    ))}
                </ul>
                {/* User & Shopping Cart Icons (Always Visible) */}
                <div className="flex items-center space-x-4">
                    {/* User Icon */}
                    <div className="cursor-pointer">
                        <Link to="login"> <FaRegUser className="text-2xl text-blue-400" /></Link>
                    </div>
                    {/* Shopping Cart */}
                    <div className="relative cursor-pointer" onClick={() => SetIsOpen(!isOpen)}>
                        <CiShoppingCart className="text-3xl text-blue-400" />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                                {cart.length}
                            </span>
                        )}
                    </div>
                    <div className="md:hidden cursor-pointer" onClick={() => setMenuIsOpen(!isMenuOpen)}>
                        {isMenuOpen ? <HiX className="text-3xl text-blue-400" /> : <HiOutlineMenuAlt3 className="text-3xl text-blue-400" />}
                    </div>
                </div>
            </div>
            <ul className={`absolute top-16 left-0 w-full bg-white shadow-lg p-5 flex flex-col items-center space-y-4 transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-[200%]"} md:hidden`}>
                {leftNavLinks.concat(rightNavLinks).map((link) => (
                    <Link key={link.name} to={link.path} onClick={() => setMenuIsOpen(false)}>
                        <li className="text-blue-400 font-mono hover:text-blue-600 transition">{link.name}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
export default NavBar;
