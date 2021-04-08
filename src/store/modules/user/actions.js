import router from "@/router";
export default {
  logout({ commit }) {
    commit("setUserData", { user: null, token: null });
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
    router.push("/");
  },
};
