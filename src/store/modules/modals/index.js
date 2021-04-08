export default {
  namespaced: true,
  state: {
    isModalActive: false,
    activeModal: "",
  },
  mutations: {
    setActiveModal(state, params) {
      state.isModalActive = params.isModalActive || false;
      state.activeModal = params.activeModal || "";
    },
  },
};
