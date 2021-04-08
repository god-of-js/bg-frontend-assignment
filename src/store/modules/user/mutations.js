export default {
  setUserData(state, params) {
    state.token = params.token;
    console.log(state.token, params.token);
    state.user = params.user;
  },
};
