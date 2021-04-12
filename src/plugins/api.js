import axios from "axios";
import { BASE_URL } from "../config/secrets";
import store from "@/store";
let config = {
  baseURL: `${BASE_URL}/api`,
  timeout: 5000,
};
const service = axios.create(config);
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (err) => {
    if (err.response.data.message === "jwt expired") {
      store.dispatch("user/logout");
    }
    return Promise.reject(err.response);
  }
);
const api = (token) => {
  token ? (service.defaults.headers.Authorization = `Bearer ${token}`) : false;
  return service;
};
export default api;
