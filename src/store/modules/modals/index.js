import { SET_ACTIVE_MODAL } from "../../StoreVariables";
export default {
  namespaced: true,
  state: {
    isModalActive: false,
    activeModal: "",
    commonData: {},
  },
  mutations: {
    [SET_ACTIVE_MODAL](state, params) {
      state.isModalActive = params.isModalActive || false;
      state.activeModal = params.activeModal || "";
      state.commonData = params.commonData || {};
    },
  },
};
