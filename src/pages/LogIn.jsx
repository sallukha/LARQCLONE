import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../Service/Auth";
import { Link, useNavigate } from "react-router-dom";
const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log("Sending data to API:", data);
        try {
            const response = await loginUser(data);
            console.log("API Response:",);
            localStorage.setItem("token", response.token);
            navigate("/");
        } catch (error) {
            console.error("Login Error:", error);
            setErrorMessage(error);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h1>
            <div className="p-10 rounded-lg flex flex-col md:flex-row space-x-0 md:space-x-10 ">
                <div className="w-96">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            className="w-full border border-gray-300 p-2 mt-1 rounded-md"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}

                        <label className="block text-gray-700 mt-4">Password</label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password"
                            className="w-full border border-gray-300 p-2 mt-1 rounded-md"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}

                        <div className="mt-6 flex justify-between items-center">
                            <button
                                type="submit"
                                className="bg-blue-900 text-white py-2 px-6 w-[50%] rounded-md hover:bg-blue-800 transition"
                            >
                                Sign In
                            </button>
                            <a href="#" className="text-blue-700 text-sm">
                                <u>Forgot your password?</u>
                            </a>
                        </div>
                    </form>
                </div>
                <div className="bg-gray-200 p-10 w-80 mt-6 md:mt-0 rounded-md">
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
                    <button
                        onClick={() => navigate("/register")}
                        className="bg-blue-900 text-white py-2 px-4 w-full mt-4 hover:bg-blue-800 transition rounded-md"
                    >
                        <Link to="/register"> Create Account</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
