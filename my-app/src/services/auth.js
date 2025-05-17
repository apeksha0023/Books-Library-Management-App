// services/auth.js
import axiosInstance from "./axiosInstance";

// Send login data (email + password)
export const login = async (data) => {
  return axiosInstance.post("/api/auth/login", data);
};

// Send registration data (email + password)
export const register = async (data) => {
  return axiosInstance.post("/api/auth/register", data);
};

// Logout the user (clears the token cookie)
export const logout = async () => {
  return axiosInstance.get("/api/auth/logout");
};

// Get current user (from the token in the cookie)
export const getMe = async () => {
  return axiosInstance.get("/api/auth/me");
};
