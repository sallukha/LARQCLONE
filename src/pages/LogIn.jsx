import React, { useState } from "react";
import { loginUser } from "../Service/Auth";

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle input change
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await loginUser(formData);
            console.log("Login Success:", data);
            setFormData({ email: "", password: "" }); // Clear fields after successful login
        } catch (err) {
            setError("Invalid email or password!"); // Show user-friendly error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h1>
            <div className="p-10 rounded-lg flex space-x-10">
                {/* Login Form */}
                <div className="w-96">
                    <form onSubmit={handleLogin}>
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 mt-1"
                            placeholder="Enter your email"
                            required
                        />
                        <label className="block text-gray-700 mt-4">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 mt-1"
                            placeholder="Enter your password"
                            required
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <div className="mt-6 flex justify-between items-center">
                            <button
                                type="submit"
                                className="bg-blue-900 text-white py-2 px-6 w-[50%]"
                                disabled={loading}
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                            <a href="#" className="text-blue-700 text-sm">
                                <u>Forgot your password?</u>
                            </a>
                        </div>
                    </form>
                </div>

                {/* Signup Section */}
                <div className="bg-gray-200 p-10 w-80">
                    <h2 className="text-lg font-semibold">New customer?</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Create an account with us and you'll be able to:
                    </p>
                    <ul className="text-sm text-gray-600 list-disc ml-4 mt-2 space-y-1">
                        <li>Check out faster</li>
                        <li>Save multiple shipping addresses</li>
                        <li>Access your order history</li>
                        <li>Track new orders</li>
                    </ul>
                    <button className="bg-blue-900 text-white py-2 px-4 w-full mt-4 hover:text-white">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
