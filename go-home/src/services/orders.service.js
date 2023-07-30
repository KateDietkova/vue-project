import axios from "axios";
import { store } from "@/store";

const axiosInstance = axios.create({
  baseUrl: "https://apt-booking-api.herokuapp.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const bookApartment = (payload) => {
  return axiosInstance.post(
    "https://apt-booking-api.herokuapp.com/orders",
    payload
  );
};

export const getOrders = () => {
  return axiosInstance.get("https://apt-booking-api.herokuapp.com/orders");
};
