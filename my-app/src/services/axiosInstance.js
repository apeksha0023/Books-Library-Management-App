import axios from "axios";

// If you use Vite proxy (recommended), use baseURL = ''
// so API calls go through Vite dev server proxy to backend.
// This avoids CORS issues during dev.
const axiosInstance = axios.create({
  baseURL: '',           // Proxy handles routing to backend during development
  withCredentials: true, // Send cookies with requests
});

export default axiosInstance;
