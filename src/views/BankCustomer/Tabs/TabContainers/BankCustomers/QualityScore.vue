<template>
  <div class="panel panel-bg">
    <div class="panel--header">
      <div class="panel--title">
        <div class="expand--btn" @click="panelExpanded = !panelExpanded">
          <ChevronUp20 v-if="panelExpanded" class="btn-icon" />
          <ChevronDown20 v-if="!panelExpanded" class="btn-icon" />
        </div>
        <div class="text_title_md">Quality score change</div>
      </div>
      <div class="panel--tools">
        <div class="date"></div>
      </div>
    </div>
    <div v-if="panelExpanded" class="panel--body">
      <div class="score--details">
        <div class="detail--items">
          <div class="text_content_md text_bold">Failed rows</div>
          <div class="text_title_xlg">
            {{ scoreDetails.failedRows.value
            }}<span class="text_title_md">{{
              scoreDetails.failedRows.suffix
            }}</span>
          </div>
        </div>
        <div class="detail--items">
          <div class="text_content_md text_bold">Delta</div>
          <Growth
            :growth="scoreDetails.delta"
            :growthClass="`text_title_xlg`"
            :suffixClass="`text_title_md`"
          />
        </div>

        <div class="detail--runs">
          <div class="runs">
            <div class="text_content_md text_bold">Runs</div>
            <div class="text_title_xlg">{{ scoreDetails.runs.cnt }}</div>
          </div>
          <div class="items">
            <div class="item--each text_content_sm text_bold">
              <span class="head-round-icon icon-color-blue"></span>
              ValidEmailAddress
            </div>
            <div class="item--each text_content_sm text_bold">
              <span class="head-round-icon icon-color-green"></span>
              ValidMailAddress
            </div>
            <div class="item--each text_content_sm text_bold">
              <span class="head-round-icon icon-color-white"></span>
              NetIncome2
            </div>
          </div>
          <a class="settings">
            <Settings20 />
          </a>
        </div>
      </div>
      <ccv-area-chart
        :data="areaChart.data"
        :options="areaChart.options"
      ></ccv-area-chart>
    </div>
  </div>
</template>

<script>
import { CcvAreaChart } from '@carbon/charts-vue';
import { ChevronDown20, ChevronUp20, Settings20 } from '@carbon/icons-vue';
import { Growth } from '@/components/Specials';

export default {
  name: 'DashboardTab',
  components: {
    CcvAreaChart,
    ChevronDown20,
    ChevronUp20,
    Growth,
    Settings20
  },
  props: {
    qualityScore: Array,
    areaChart: Object
  },
  data: function() {
    return {
      panelExpanded: true,
      scoreDetails: {
        failedRows: {
          value: 23,
          suffix: '%'
        },
        delta: {
          growth: -71,
          suffix: '%'
        },
        runs: {
          cnt: 5
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

.panel {
  padding: $spacing-05;
  .panel--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .expand--btn {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: $text-04;
    }
    .panel--title {
      display: flex;
      align-items: center;
    }
    .panel--tools {
    }
  }
  .panel--body {
    .score--details {
      display: flex;
      padding-top: $spacing-07;
      padding-bottom: $spacing-07;
      padding-left: $spacing-06;

      .detail--items {
        min-width: 150px;
        padding-left: $spacing-05;
        border-right: 1px solid $active-secondary;
      }
      .detail--runs {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .runs {
          width: 100px;
          padding-left: $spacing-05;
        }
        .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 500px;
          .item--each {
            display: flex;
            align-items: center;
            span {
              border-radius: 100%;
              width: 10px;
              height: 10px;
              border: 2px solid;
              margin-right: 5px;
            }
          }
          @media (max-width: 1396px) {
            flex-direction: column;
          }
        }
        .settings {
          color: $text-04;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
