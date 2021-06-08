<template>
  <cv-header aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    <cv-header-name href="javascript:void(0)" prefix="IBM">
      {{ getAppName }}
    </cv-header-name>
    <cv-header-nav aria-label="Carbon nav"> </cv-header-nav>

    <template v-slot:header-global>
      <div class="header-tools">
        <cv-select
          v-model="catalog_select"
          up="up"
          label=""
          class="catalog-select"
          inline="inline"
          :disabled="false"
          @change="changeCalalogSelect"
        >
          <cv-select-option
            v-for="(each, idx) in getCatalogs"
            :key="`catalogs-${idx}`"
            :value="`${idx}`"
            >{{ each }}</cv-select-option
          >
        </cv-select>

        <cv-text-input
          v-model="catalogSearchInput"
          class="search-input"
          type="inputType"
          placeholder="Search catalogs"
          v-on:change="changeCatalogSearchInput"
        >
          <Search20 />
        </cv-text-input>

        <cv-dropdown
          v-model="device_select"
          up="up"
          class="brand-dropdown"
          inline="inline"
          type="number"
          @change="changeDeviceSelect"
          :disabled="false"
        >
          <cv-dropdown-item
            v-for="(each, idx) in getDevices"
            :key="`devices-${idx}`"
            :value="`${idx}`"
            >{{ each }}</cv-dropdown-item
          >
        </cv-dropdown>
      </div>

      <cv-header-global-action
        aria-label="Notifications"
        aria-controls="notifications-panel"
        label="Notifications"
        tipPosition="bottom"
        tipAlignment="start"
      >
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="User"
        aria-controls="User-panel"
        label="User"
        tipPosition="bottom"
        tipAlignment="center"
      >
        <User20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import { Notification20, User20, Search20 } from '@carbon/icons-vue';

import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      getAppName: 'App/getAppName',
      getCatalogs: 'App/getCatalogs',
      getCurrentCatalog: 'App/getCurrentCatalog',
      getSearchCatalog: 'App/getSearchCatalog',
      getDevices: 'App/getDevices',
      getCurrentDevice: 'App/getCurrentDevice',
      getTitles: 'App/getTitles'
    })
  },
  data: function() {
    return {
      catalogSearchInput: '',
      catalog_select: '0',
      device_select: '0'
    };
  },
  created() {
    this.catalog_select = this.getCurrentCatalog;
    this.catalogSearchInput = this.getSearchCatalog;
    this.device_select = this.getCurrentDevice;
  },
  methods: {
    changeCalalogSelect: function() {
      this.$store.dispatch('App/setCurrentCatalog', this.catalog_select);
    },
    changeCatalogSearchInput: function() {
      this.$store.dispatch('App/setSearchInput', this.catalogSearchInput);
    },
    changeDeviceSelect: function() {
      this.$store.dispatch('App/setDeviceSelect', this.device_select);
    }
  },
  components: { Notification20, User20, Search20 }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import '../../styles/carbon-texts';
@import '../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';
</style>
