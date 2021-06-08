<template>
  <div class="tab--content_wrapper">
    <quality-score
      :qualityScore="qualityScore"
      :areaChart="qualityScoreTable"
    />
    <div class="bx--row each-row">
      <div class="bx--col-lg-12 bx--col-md-12">
        <data-classes :qualityScore="qualityScore" />
      </div>
      <div class="bx--col-lg-4 bx--col-md-4">
        <Analysis />
      </div>
    </div>
    <div class="bx--row each-row">
      <div class="bx--col-lg-4 bx--col-md-4">
        <ScoreDistribution />
      </div>
      <div class="bx--col-lg-4 bx--col-md-4">
        <Relationships />
      </div>
      <div class="bx--col-lg-8 bx--col-md-4">
        <pii-data-classes :areaChart="PIIDataTable" />
      </div>
    </div>
  </div>
</template>

<script>
import QualityScore from './QualityScore';
import DataClasses from './DataClasses';
import Analysis from './Analysis';
import ScoreDistribution from './ScoreDistribution';
import Relationships from './Relationships';
import PiiDataClasses from './PIIDataClasses';

import * as colors from '@/constants/color.js';
import $ from 'jquery';

export default {
  name: 'DashboardTab',
  components: {
    QualityScore,
    DataClasses,
    Analysis,
    ScoreDistribution,
    Relationships,
    PiiDataClasses
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
            group: 'Customer ID',
            date: '2019-01-01T08:00:00.000Z',
            value: 10
          },
          {
            group: 'Customer ID',
            date: '2019-01-06T08:00:00.000Z',
            value: 40
          },
          {
            group: 'Customer ID',
            date: '2019-01-08T08:00:00.000Z',
            value: 30
          },
          {
            group: 'Customer ID',
            date: '2019-01-15T08:00:00.000Z',
            value: 50
          },
          {
            group: 'Customer ID',
            date: '2019-01-19T08:00:00.000Z',
            value: 40
          },
          {
            group: 'Customer ID',
            date: '2019-01-25T08:00:00.000Z',
            value: 32
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
              title: 'Data Quality',
              scaleType: 'linear'
            }
          },
          color: {
            gradient: {
              enabled: true
            },
            scale: {
              'Customer ID': colors.WHITE_COLOR,
              'Weather Conditions': colors.GREEN_COLOR,
              'Bank Customers': colors.BLUE_COLOR
            }
          },
          grid: {
            x: {
              enabled: false
            }
          },
          height: '400px',
          curve: 'curveMonotoneX'
        }
      },
      PIIDataTable: {
        data: [
          {
            group: 'Customer ID',
            date: '2019-01-01T08:00:00.000Z',
            value: 10
          },
          {
            group: 'Customer ID',
            date: '2019-01-06T08:00:00.000Z',
            value: 40
          },
          {
            group: 'Customer ID',
            date: '2019-01-08T08:00:00.000Z',
            value: 30
          },
          {
            group: 'Customer ID',
            date: '2019-01-15T08:00:00.000Z',
            value: 50
          },
          {
            group: 'Customer ID',
            date: '2019-01-19T08:00:00.000Z',
            value: 40
          },
          {
            group: 'Customer ID',
            date: '2019-01-25T08:00:00.000Z',
            value: 32
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
              title: 'Number of data assets',
              scaleType: 'linear'
            }
          },
          color: {
            gradient: {
              enabled: true
            },
            scale: {
              'Customer ID': colors.GREEN_COLOR
            }
          },
          grid: {
            x: {
              enabled: false
            }
          },
          legend: {
            enabled: false
          },
          height: '230px'
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
