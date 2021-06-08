<template>
  <div class="bx--grid bx--grid--full-width relationships--panel panel-bg">
    <div class="bx--row">
      <div class="bx--col-12-lg bx--col-md-12">
        <div class="board--title">
          <div class="text_title_msd">Relationships</div>
        </div>
      </div>
    </div>
    <div class="bx--row score_description--chart">
      <ccv-bubble-chart
        :data="scoreDestribution.data"
        :options="scoreDestribution.options"
      />
    </div>
  </div>
</template>

<script>
import { CcvBubbleChart } from '@carbon/charts-vue';
import * as colors from '@/constants/color.js';

export default {
  name: 'Relationships',
  components: { CcvBubbleChart },
  // props: {
  //   qualityScore: Array,
  //   areaChart: Object
  // }
  data: function() {
    return {
      scoreDestribution: {
        data: [
          {
            group: 'Analysis',
            key: 'Overlap Analysis',
            value: 3
          },
          {
            group: 'Analysis',
            key: 'Data Analysis',
            value: 2
          },
          {
            group: 'Analysis',
            key: 'Key relationships',
            value: 1.5
          },
          {
            group: 'Error',
            key: 'Overlap Analysis',
            value: 4
          },
          {
            group: 'Error',
            key: 'Data Analysis',
            value: 3
          },
          {
            group: 'Error',
            key: 'Key relationships',
            value: 3
          },
          {
            group: 'Outdated',
            key: 'Overlap Analysis',
            value: 6
          },
          {
            group: 'Outdated',
            key: 'Data Analysis',
            value: 5
          },
          {
            group: 'Outdated',
            key: 'Key relationships',
            value: 5
          }
        ],
        options: {
          rulerOptions: {
            enabled: false
          },
          grid: {
            x: {
              enabled: true,
              nubmerOfTickets: 3
            },
            y: {
              nubmerOfTickets: 3,
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
            scale: {
              Analysis: colors.BLUE_COLOR,
              Error: colors.RED_COLOR,
              Outdated: colors.GREEN_COLOR
            }
          },
          bars: {
            maxWidth: 10,
            width: 5
          },
          height: '230px'
        }
      }
    };
  },
  created() {}
};
</script>
<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';

.relationships--panel {
  padding-top: $spacing-05;
  height: 300px;
  .score_description--chart {
    margin-top: $spacing-05;
  }
  .board--title {
    margin-bottom: $spacing-03;
  }
}
</style>
