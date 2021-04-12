import { SET_UNIT, SET_UNITS } from "../../StoreVariables";
export default {
  [SET_UNITS](state, params) {
    state.units.push(...params);
  },
  [SET_UNIT](state, param) {
    state.unit = param;
  },
};
