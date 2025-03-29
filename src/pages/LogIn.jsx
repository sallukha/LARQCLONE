import React from "react";
const LogIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h1>
      <div className=" p-10 rounded-lg  flex space-x-10">
        <div className="w-96">
          <form>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2  mt-1"
              placeholder="Enter your email"
            />
            <label className="block text-gray-700 mt-4">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2  mt-1"
              placeholder="Enter your password"
            />
            <div className="mt-6 flex justify-between items-center">
              <button className="bg-blue-900 text-white py-2 px-6  w-[50%]">Sign In</button>
              <a href="#" className="text-blue-700 text-sm"> <u>Forgot your password?</u> </a>
            </div>
          </form>
        </div>
        <div className="bg-gray-200 p-10 w-80">
          <h2 className="text-lg font-semibold">New customer?</h2>
          <p className="text-sm text-gray-600 mt-2">
            Create an account with us and you'll span be  able to:
          </p>
          <ul className="text-sm text-gray-600 list-disc ml-4 mt-2 space-y-1">
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
          </ul>
          <button className="bg-blue-900 text-white py-2 px-4 w-full mt-4 hover:text-white">Create account</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
