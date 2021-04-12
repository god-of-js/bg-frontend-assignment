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
          // A resolve is used here to notify the component that the process has been completed and it can now be routed to the dashboard.
          resolve(data);
        })
        .catch((err) => {
          alert(err.data.message);
          // Reject is used here to alert the component of a failure so the loader could be stopped.
          reject(err);
        });
    });
  },
};
