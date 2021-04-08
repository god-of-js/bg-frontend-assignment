import api from "@/plugins/api";
export default {
  getUnits({ rootState, commit }) {
    api(rootState.user.token.accessToken)
      .get("/units")
      .then((result) => {
        console.log(result.data.data);
        commit("setUnits", result.data.data);
      });
  },
  getUnit({ rootState, commit }, { id }) {
    api(rootState.user.token.accessToken)
      .get("/units/" + id)
      .then((result) => {
        console.log(result.data, "unit");
        commit("setUnit", result.data);
      });
  },
};
