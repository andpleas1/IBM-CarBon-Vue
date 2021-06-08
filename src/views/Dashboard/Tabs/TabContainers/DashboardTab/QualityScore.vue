<template>
  <div class="bx--grid bx--grid--full-width score--panel panel-bg">
    <div class="bx--row">
      <div class="bx--col-12-lg bx--col-md-12">
        <div class="board--title">
          <div class="text_title_md">Decreasing data quality scores</div>
          <div></div>
        </div>
        <div class="board--subtitle text_content_sm">
          Showing top 3 data assets
        </div>
      </div>
    </div>
    <info-section class="info-section">
      <info-card
        :icon="true"
        iconColor="blue"
        heading="Customer ID"
        :first="true"
        :data="qualityScore[0]"
      />
      <info-card
        :icon="true"
        iconColor="white"
        heading="Customer ID"
        :data="qualityScore[1]"
      />
      <info-card
        :icon="true"
        iconColor="green"
        heading="Customer ID"
        :data="qualityScore[2]"
      />
      <info-details-card :data="qualityScore" :scoreModal="doScoreModal" />
    </info-section>

    <ccv-area-chart
      :data="areaChart.data"
      :options="areaChart.options"
    ></ccv-area-chart>

    <QualityScoreModal
      ref="QualityModal"
      :qualityScore="qualityScore"
      :scoreModal="scoreModal"
    />
  </div>
</template>

<script>
import { CcvAreaChart } from '@carbon/charts-vue';
import QualityScoreModal from './QualityScoreModal';

import {
  InfoSection,
  InfoCard,
  InfoDetailsCard
} from '@/components/InfoSection';

export default {
  name: 'DashboardTab',
  components: {
    InfoSection,
    InfoCard,
    InfoDetailsCard,
    CcvAreaChart,
    QualityScoreModal
  },
  props: {
    qualityScore: Array,
    areaChart: Object
  },
  data: function() {
    return {
      scoreModal: {
        size: 'md',
        use_scrollingContent: true,
        visible: false
      }
    };
  },
  methods: {
    doScoreModal: function() {
      this.scoreModal.visible = true;
    },
    scoreModalHidden: function() {
      this.scoreModal.visible = false;
    },
    redirectPage: function() {
      this.$refs.QualityModal.scoreModalHidden();
      // console.log(this.$refs.QualityModal);
      let self = this;
      setTimeout(function() {
        self.$router.push({ name: 'bankcustomersPage' });
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';
</style>
