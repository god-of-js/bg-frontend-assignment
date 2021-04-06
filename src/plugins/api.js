import axios from "axios";
import { BASE_URL } from "../config/secrets";
const token = "";
let config = {
  baseURL: `${BASE_URL}`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const service = axios.create(config);
service.interceptors.response.use(
  (response) => {
    console.log(response);
    return Promise.resolve(response);
  },
  (err) => {
    console.log(err.response);
    return Promise.reject(err.response);
  }
);
const api = (token) => {
  token ? (service.defaults.headers.Authorization = `Bearer ${token}`) : false;
  return service;
};
export default api;
