<template>
  <div class="tab--content_wrapper">
    <quality-score
      :qualityScore="qualityScore"
      :areaChart="qualityScoreTable"
    />
    <div class="each-row">
      <data-classes :qualityScore="qualityScore" />
    </div>
  </div>
</template>

<script>
import QualityScore from './QualityScore';
import DataClasses from './DataClasses';

import * as colors from '@/constants/color.js';
import $ from 'jquery';

export default {
  name: 'BankCustomersTab',
  components: {
    QualityScore,
    DataClasses
  },
  data: function() {
    return {
      qualityScore: [
        {
          heading: 'Customer ID',
          content: 'Delta',
          growth: 20,
          suffix: '%',
          qualityScore: {
            growth: -48,
            suffix: '%'
          }
        },
        {
          heading: 'Weather Condition',
          content: 'Delta',
          growth: 18,
          suffix: '%',
          qualityScore: {
            growth: -23,
            suffix: '%'
          }
        },
        {
          heading: 'Bank Customer',
          content: 'Delta',
          growth: 16,
          suffix: '%',
          qualityScore: {
            growth: -14,
            suffix: '%'
          }
        },
        {
          heading: 'Weather Condition',
          content: 'Delta',
          growth: 18,
          suffix: '%',
          qualityScore: {
            growth: -14,
            suffix: '%'
          }
        },
        {
          heading: 'Bank Customer',
          content: 'Delta',
          growth: 16,
          suffix: '%',
          qualityScore: {
            growth: -14,
            suffix: '%'
          }
        },
        {
          heading: 'Weather Condition',
          content: 'Delta',
          growth: 18,
          suffix: '%',
          qualityScore: {
            growth: -14,
            suffix: '%'
          }
        },
        {
          heading: 'Bank Customer',
          content: 'Delta',
          growth: 16,
          suffix: '%',
          qualityScore: {
            growth: -14,
            suffix: '%'
          }
        }
      ],
      qualityScoreTable: {
        data: [
          {
            group: 'Weather Conditions',
            date: '2019-01-01T08:00:00.000Z',
            value: 60
          },
          {
            group: 'Weather Conditions',
            date: '2019-01-06T08:00:00.000Z',
            value: 60
          },
          {
            group: 'Weather Conditions',
            date: '2019-01-08T08:00:00.000Z',
            value: 60
          },
          {
            group: 'Weather Conditions',
            date: '2019-01-15T08:00:00.000Z',
            value: 80
          },
          {
            group: 'Weather Conditions',
            date: '2019-01-19T08:00:00.000Z',
            value: 65
          },
          {
            group: 'Weather Conditions',
            date: '2019-01-25T08:00:00.000Z',
            value: 45
          }
        ],
        options: {
          animations: true,
          axes: {
            bottom: {
              scaleType: 'time'
            },
            left: {
              mapsTo: 'value',
              title: 'Failed rows (%)',
              scaleType: 'linear'
            }
          },
          legend: {
            enabled: false
          },
          color: {
            gradient: {
              enabled: true
            },
            scale: {
              'Customer ID': colors.WHITE_COLOR,
              'Weather Conditions': colors.BLUE_COLOR,
              'Bank Customers': colors.BLUE_COLOR
            }
          },
          grid: {
            x: {
              enabled: false
            }
          },
          height: '350px',
          curve: 'curveMonotoneX'
        }
      }
    };
  },
  mounted() {
    $('.chart-grid-backdrop rect').css('fill', 'transparent');
    $('.chart-grid-backdrop rect').attr('y', '100%');
    $('.chart-grid-backdrop rect').css('height', '1px');
    $('.bx--cc--axes .domain').css('stroke', 'transparent');
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';

.each-row {
  margin-top: $spacing-07;
  width: auto;
}
</style>
