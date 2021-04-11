export default {
  namespaced: true,
  state: {
    isModalActive: false,
    activeModal: "",
    commonData: {},
  },
  mutations: {
    setActiveModal(state, params) {
      console.log(params);
      state.isModalActive = params.isModalActive || false;
      state.activeModal = params.activeModal || "";
      state.commonData = params.commonData || {};
    },
  },
};
