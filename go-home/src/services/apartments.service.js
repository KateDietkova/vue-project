import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "https://apt-booking-api.herokuapp.com",
});

export const getApartmentsList = () => {
  return axiosInstance.get("https://apt-booking-api.herokuapp.com/apartments");
};

export const getApartmentById = (id) => {
  return axiosInstance.get(
    `https://apt-booking-api.herokuapp.com/apartments/${id}`
  );
};
