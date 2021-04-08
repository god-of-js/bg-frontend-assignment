import api from "@/plugins/api";
export default {
  getUnits({ rootState, commit }) {
    console.log(rootState.user, "unit's action");
    api(rootState.user.token.accessToken)
      .get("/units")
      .then((result) => {
        console.log(result.data.data);
        commit("setUnits", result.data.data);
      });
  },
};
