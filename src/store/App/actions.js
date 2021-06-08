export default {
  setAppName(context, payload) {
    context.commit('setAppName', payload);
  },
  setCurrentCatalog(context, payload) {
    context.commit('setCurrentCatalog', payload);
  },
  setSearchInput(context, payload) {
    context.commit('setSearchInput', payload);
  },
  setDeviceSelect(context, payload) {
    context.commit('setDeviceSelect', payload);
  },
  setTitles(context, payload) {
    context.commit('setTitles', payload);
  }
};
