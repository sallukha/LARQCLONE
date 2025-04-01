import axios from "axios";

const BASE_URL = "https://your-api-url.com/api"; // Replace with your backend API URL

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Handle user login
export const loginUser = async (userData) => {
    try {
        const response = await api.post("/auth/login", userData);
        return response.data; 
    } catch (error) {
        throw error.response?.data?.message || "Login failed!";
    }
};

// Handle user registration
export const registerUser = async (userData) => {
    try {
        const response = await api.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Registration failed!";
    }
};

// Fetch user details (Example: Get user profile)
export const getUserProfile = async (token) => {
    try {
        const response = await api.get("/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Failed to fetch user profile!";
    }
};
