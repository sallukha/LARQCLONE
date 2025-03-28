import React from "react";
import { FaRegUser } from "react-icons/fa";
import AddToCart from "./AddToCart";
const NavBar = () => {
    return (
        <>
            <nav className="fixed top-0 w-full bg-white flex justify-between items-center px-6 py-3 z-50 p-5">
                <ul className="flex space-x-6 text-blue- font-mono text-blue-400">
                    <li>BOTTLES</li>
                    <li>PITCHERS</li>
                    <li>SHOP ALL</li>
                </ul>
                <div className="text-xl font-bold">
                    <h1>LARO</h1>
                </div>
                <ul className="flex space-x-6 items-center font-mono text-blue-400">
                    <li>TECHNOLOGY</li>
                    <li>WATER QUALITY</li>
                    <FaRegUser />
                    <AddToCart/>
                </ul>
            </nav>

        </>
    );
};

export default NavBar;
