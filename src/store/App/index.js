import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  appName: 'Watson knowledge Catalog',
  catalogs: ['All catalogs', 'Catalog1', 'Catalog2'],
  cur_catalog: '0',
  searchCatalog: undefined,
  devices: ['IBM', 'Apple', 'HP'],
  cur_device: '0',
  titles: ['Projects', 'AA_Dan1']
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
