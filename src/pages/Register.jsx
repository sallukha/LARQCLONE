import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../Service/Auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
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
            const response = await registerUser(data);
            navigate("/");
        } catch (error) {
            setErrorMessage(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h1>
            <div className="p-10 bg-white shadow-lg rounded-lg w-96">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                    <label className="block text-gray-700">Full Name</label>
                    <input
                        {...register("fullname", { required: "Name is required" })}
                        type="text"
                        className="w-full border border-gray-300 p-2 mt-1 rounded-md"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}

                    <label className="block text-gray-700 mt-4">Email Address</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        className="w-full border border-gray-300 p-2 mt-1 rounded-md"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}

                    <label className="block text-gray-700 mt-4">Password</label>
                    <input
                        {...register("password", { required: "Password is required", minLength: 6 })}
                        type="password"
                        className="w-full border border-gray-300 p-2 mt-1 rounded-md"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}

                    <label className="block text-gray-700 mt-4">confirmPassword</label>
                    <input
                        {...register("confirmPassword", { required: "confirmPassword is required", minLength: 6 })}
                        type="password"
                        className="w-full border border-gray-300 p-2 mt-1 rounded-md"
                        placeholder="Enter your password"
                    />
                    {errors.confirmpassword && <p className="text-red-500 text-sm mt-2">{errors.confirmpassword.message}</p>}

                    <button
                        type="submit"
                        className="bg-blue-900 text-white py-2 px-6 w-full rounded-md hover:bg-blue-800 transition mt-6"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Already have an account?{" "}
                    <span
                        className="text-blue-700 cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
