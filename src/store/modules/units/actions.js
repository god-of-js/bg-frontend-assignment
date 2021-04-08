import api from "@/plugins/api";
export default {
  getUnits({ rootState, commit }, { page, q }) {
    return new Promise((resolve, reject) => {
      api(rootState.user.token.accessToken)
        .get(`/units?page=${page}&perPage=12&q=${q}`)
        .then((result) => {
          console.log(result.data.data);
          commit("setUnits", result.data.data);
          resolve();
        })
        .catch(() => {
          reject();
        });
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
