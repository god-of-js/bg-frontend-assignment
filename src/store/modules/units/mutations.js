export default {
  setUnits(state, params) {
    state.units.push(...params);
  },
  setUnit(state, param) {
    state.unit = param;
  },
};
