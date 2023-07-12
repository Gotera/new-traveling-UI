import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const useApi = () => ({
  validateToken: async (token) => {
    const response = await api.post("/validade", { token });
    return response.data;
  },
  signin: async (email, password) => {
    const response = await api.post(`${process.env.REACT_APP_API_URL}/login`, {
      email,
      password
    });
    console.log(response);
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
