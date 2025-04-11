import axios from "axios";
const BASE_URL = "http://localhost:3000";
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
export const loginUser = async (userData) => {
    try {
        const response = await api.post("/login", userData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Login failed!";
    }
};
export const registerUser = async (userData) => {
    try {
        const response = await api.post("/sign_up", userData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Registration failed!";
    }
};
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
