// books.js
import axiosInstance from "./axiosInstance";

export const getAllBooks = () => axiosInstance.get("/api/books");
export const getMyBooks = () => axiosInstance.get("/api/mybooks");
export const addToMyBooks = (bookId) => axiosInstance.post(`/api/mybooks/${bookId}`);
export const updateStatus = (bookId, status) =>
  axiosInstance.patch(`/api/mybooks/${bookId}/status`, { status });
export const updateRating = (bookId, rating) =>
  axiosInstance.patch(`/api/mybooks/${bookId}/rating`, { rating });
