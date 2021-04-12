import router from "@/router";
import { LOGOUT, SET_USER_DATA } from "../../StoreVariables";
export default {
  [LOGOUT]({ commit }) {
    commit(SET_USER_DATA, { user: null, token: null });
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
    router.push("/");
  },
};
