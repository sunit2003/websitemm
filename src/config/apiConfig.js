// import axios from "axios";
// export const API_BASE_URL = "http://localhost:5454";

// export const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${jwt}`,
//     "Content-Type": "application/json",
//   },
// });

import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";
// const jwt = localStorage.getItem("jwt");
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
