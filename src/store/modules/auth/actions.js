import api from "@/plugins/api";
import { LOGIN, SET_USER_DATA } from "../../StoreVariables";
export default {
  [LOGIN]({ commit }, userData) {
    return new Promise((resolve, reject) => {
      api()
        .post("/auth/login", userData)
        .then(({ data }) => {
          commit(`user/${SET_USER_DATA}`, data, { root: true });
          localStorage.setItem("userData", JSON.stringify(data.user));
          localStorage.setItem("userToken", JSON.stringify(data.token));
          resolve(data);
        })
        .catch((err) => {
          alert(err.data.message);
          reject(err);
        });
    });
  },
};
