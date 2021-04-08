import api from "@/plugins/api";
export default {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      api()
        .post("/auth/login", data)
        .then((result) => {
          commit("user/setUserData", result.data, { root: true });
          localStorage.setItem("userData", JSON.stringify(result.data.user));
          localStorage.setItem("userToken", JSON.stringify(result.data.token));
          resolve();
        })
        .catch((err) => {
          alert(err.data.message);
          reject();
        });
    });
  },
};
