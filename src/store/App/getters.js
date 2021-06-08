export default {
  getAppName: state => state.appName,
  getCatalogs: state => state.catalogs,
  getCurrentCatalog: state => state.cur_catalog,
  getSearchCatalog: state => state.searchCatalog,
  getDevices: state => state.devices,
  getCurrentDevice: state => state.cur_device,
  getTitles: state => state.titles
};
