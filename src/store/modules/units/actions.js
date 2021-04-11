import api from "@/plugins/api";
export default {
  getUnits({ rootState, commit }, { page, q }) {
    return new Promise((resolve, reject) => {
      api(rootState.user.token.accessToken)
        .get(`/units?page=${page}&perPage=12&q=${q}`)
        .then((result) => {
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
        commit("setUnit", result.data);
      });
  },
  bookUnit({ rootState }, data) {
    return new Promise((resolve, reject) => {
      api(rootState.user.token.accessToken)
        .post("/units/book", data)
        .then(() => {
          alert("Unit booked successfully");
          // No response message is passed hence no need to handle the response.
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
};
