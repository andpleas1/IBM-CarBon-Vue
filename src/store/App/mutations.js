export default {
  setAppName(state, payload) {
    state.appName = payload;
  },
  setCurrentCatalog(state, payload) {
    state.cur_catalog = payload;
  },
  setSearchInput(state, payload) {
    state.searchCatalog = payload;
  },
  setDeviceSelect(state, payload) {
    state.cur_device = payload;
  },
  setTitles(state, payload) {
    state.titles = payload;
  }
};
