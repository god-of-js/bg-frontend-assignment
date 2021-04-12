import { SET_USER_DATA } from "../../StoreVariables";
export default {
  [SET_USER_DATA](state, params) {
    state.token = params.token;
    state.user = params.user;
  },
};
