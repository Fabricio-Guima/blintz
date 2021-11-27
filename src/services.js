import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://development-api.blintz.com.br/properties"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endopoint, body) {
    return axiosInstance.delete(endopoint, body);
  }
};
