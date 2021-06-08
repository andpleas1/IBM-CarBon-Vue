<template>
  <div class="bx--row dashboard--tab_wrapper">
    <DashboardTab v-if="currentTab === 0" />
    <DashboardTab v-if="currentTab === 1" />
    <DashboardTab v-if="currentTab === 2" />
    <DashboardTab v-if="currentTab === 3" />
    <DashboardTab v-if="currentTab === 4" />
    <DashboardTab v-if="currentTab === 5" />
    <DashboardTab v-if="currentTab === 6" />
  </div>
</template>

<script>
import DashboardTab from './TabContainers';

export default {
  name: 'TabContainer',
  components: { DashboardTab },
  props: {
    currentTab: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      container: false,
      selected: false
    };
  },
  methods: {
    actionSelected: function() {}
  }
};
</script>

<style lang="scss">
@import '../../../styles/carbon-utils';

.dashboard--tab_wrapper {
  padding-top: $spacing-05;
}
</style>
