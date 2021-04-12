import api from "@/plugins/api";

import {
  GET_UNITS,
  GET_UNIT,
  BOOK_UNIT,
  SET_UNITS,
  SET_UNIT,
} from "../../StoreVariables";
export default {
  [GET_UNITS]({ rootState, commit }, { page, q }) {
    return api(rootState.user.token.accessToken)
      .get(`/units?page=${page}&perPage=12&q=${q}`)
      .then(({ data }) => {
        commit(SET_UNITS, data.data);
      });
  },
  [GET_UNIT]({ rootState, commit }, { id }) {
    return api(rootState.user.token.accessToken)
      .get(`/units/${id}`)
      .then(({ data }) => {
        commit(SET_UNIT, data);
      })
      .catch((err) => {
        alert(err.data.message);
      });
  },
  [BOOK_UNIT]({ rootState }, data) {
    return api(rootState.user.token.accessToken)
      .post("/units/book", data)
      .then(() => {
        alert("Unit booked successfully");
      })
      .catch((err) => {
        alert(err.data.message);
      });
  },
};
