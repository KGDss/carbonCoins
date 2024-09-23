import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      if (config.headers) config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Axios Interceptor: Response Method
// AxiosInstance.interceptors.response.use(
//   (response) => {
//     // Can be modified response
//     return response;
//   },
//   (error) => {
//     // Handle response errors here
//     return Promise.reject(error);
//   }
// );
