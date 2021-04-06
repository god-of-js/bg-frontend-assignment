export default {
  setUserData(state, params) {
    state.user = params.user;
    state.tokenObj = params.token;
  },
};
