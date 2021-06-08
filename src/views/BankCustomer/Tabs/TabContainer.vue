<template>
  <div class="bx--row dashboard--tab_wrapper">
    <BankCustomers v-if="currentTab === 0" />
    <BankCustomers v-if="currentTab === 1" />
    <BankCustomers v-if="currentTab === 2" />
    <BankCustomers v-if="currentTab === 3" />
    <BankCustomers v-if="currentTab === 4" />
    <BankCustomers v-if="currentTab === 5" />
    <BankCustomers v-if="currentTab === 6" />
  </div>
</template>

<script>
import BankCustomers from './TabContainers';

export default {
  name: 'TabContainer',
  components: { BankCustomers },
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

<style lang="scss" scoped>
@import '../../../styles/carbon-utils';

.dashboard--tab_wrapper {
  padding-top: $spacing-05;
}
</style>
