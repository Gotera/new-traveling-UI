import axios from "axios";
const token = localStorage.getItem("authToken");
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: "Bearer " + token,
  },
});

export const useApi = () => ({
  validateToken: async () => {
    const response = await api.get(`${process.env.REACT_APP_API_URL}/user`);
    return response.data;
  },
  signin: async (email, password) => {
    const response = await api.post(`${process.env.REACT_APP_API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
