<template>
  <div class="bx--grid bx--grid--full-width score_describution--panel panel-bg">
    <div class="bx--row">
      <div class="bx--col-12-lg bx--col-md-12">
        <div class="board--title">
          <div class="text_title_msd">Data quality score distribution</div>
        </div>
        <div class="board--subtitle text_content_sm">
          Data quality threshold {{ qualityThreshold }}%
        </div>
      </div>
    </div>
    <div class="bx--row score_description--chart">
      <ccv-grouped-bar-chart
        :data="scoreDestribution.data"
        :options="scoreDestribution.options"
      />
    </div>
  </div>
</template>

<script>
import { CcvGroupedBarChart } from '@carbon/charts-vue';
import * as colors from '@/constants/color.js';

export default {
  name: 'ScoreDistribution',
  components: { CcvGroupedBarChart },
  // props: {
  //   qualityScore: Array,
  //   areaChart: Object
  // }
  data: function() {
    return {
      qualityThreshold: 80,
      scoreDestribution: {
        data: [
          {
            group: 'Good',
            key: '0-20',
            value: 4
          },
          {
            group: 'Good',
            key: '41-60',
            value: 6
          },
          {
            group: 'Good',
            key: '81-100',
            value: 3
          },
          {
            group: 'Bad',
            key: '0-20',
            value: 1
          },
          {
            group: 'Bad',
            key: '41-60',
            value: 3
          },
          {
            group: 'Bad',
            key: '81-100',
            value: 5
          }
        ],
        options: {
          rulerOptions: {
            enabled: false
          },
          grid: {
            x: {
              enabled: false
            },
            y: {
              enabled: true
            }
          },
          axes: {
            left: {
              title: 'Number of data assets',
              mapsTo: 'value',
              visible: true,
              scaleType: 'linear'
            },
            bottom: {
              scaleType: 'labels',
              mapsTo: 'key'
            }
          },
          color: {
            gradient: {
              enabled: true
            },
            scale: {
              Good: colors.BLUE_COLOR,
              Bad: colors.WHITE_COLOR
            }
          },
          bars: {
            maxWidth: 10,
            width: 5
          },
          height: '185px'
        }
      }
    };
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';

.score_describution--panel {
  padding-top: $spacing-05;
  height: 300px;
  .score_description--chart {
    margin-top: $spacing-05;
  }
}
</style>
