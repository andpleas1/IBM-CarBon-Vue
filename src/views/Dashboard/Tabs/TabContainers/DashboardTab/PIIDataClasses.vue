<template>
  <div class="bx--grid bx--grid--full-width piidata--panel panel-bg">
    <div class="bx--row">
      <div class="bx--col-12-lg bx--col-md-12">
        <div class="board--title">
          <div class="text_title_msd">PII data classes</div>
        </div>
      </div>
    </div>

    <div class="bx--row">
      <ccv-area-chart
        :data="areaChart.data"
        :options="areaChart.options"
      ></ccv-area-chart>
    </div>
  </div>
</template>

<script>
import { CcvAreaChart } from '@carbon/charts-vue';

export default {
  name: 'PIIDataClasses',
  components: { CcvAreaChart },
  props: {
    areaChart: Object
  }
};
</script>
<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';

.piidata--panel {
  padding-top: $spacing-05;
  height: 300px;
  .board--title {
    margin-bottom: $spacing-05;
  }
}
</style>
