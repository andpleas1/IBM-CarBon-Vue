<template>
  <div class="bx--grid bx--grid--full-width analysis--panel panel-bg">
    <div class="bx--row">
      <div class="bx--col-12-lg bx--col-md-12">
        <div class="board--title">
          <div class="text_title_msd">Analysis</div>
        </div>
        <div class="board--subtitle text_content_sm">
          {{ assets.length }} total assets
        </div>
      </div>
    </div>
    <div class="bx--row pie--charts_row">
      <div class="each--chart">
        <div class="text_content_sm">Analyzed</div>
        <div class="each--chart_chart">
          <ccv-donut-chart
            :data="pie_charts.data"
            :options="pie_charts.options"
          />
          <span class="text_title_sm">12</span>
        </div>
      </div>
      <div class="each--chart">
        <div class="text_content_sm">Error</div>
        <div class="each--chart_chart">
          <ccv-donut-chart
            :data="pie_charts.data"
            :options="pie_charts.options"
          />
          <span class="text_title_sm">13</span>
        </div>
      </div>
      <div class="each--chart">
        <div class="text_content_sm">Outdated</div>
        <div class="each--chart_chart">
          <ccv-donut-chart
            :data="pie_charts.data"
            :options="pie_charts.options"
          />
          <span class="text_title_sm">13</span>
        </div>
      </div>
    </div>

    <div class="bx--row">
      <div class="meter--charts_row">
        <div
          v-for="(each, idx) in meter_charts.data"
          :key="`meter-chart-${idx}`"
          class="each--chart_meter"
        >
          <div class="each--chart_meter_title">
            <div class="text_content_sm each--chart_meter_title_title">
              {{ each.title }}
            </div>
            <div class="text_content_sm">
              {{ each.total }}
            </div>
          </div>
          <div class="each--chart_meter_chart">
            <div
              v-for="(item, idx) in each.data"
              :key="`meter-chart-data-${idx}`"
              :style="[
                {
                  background: meter_charts.colors[idx],
                  width: `${(100 * item) / each.total}%`
                }
              ]"
              class="chart_meter_each_div"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CcvDonutChart } from '@carbon/charts-vue';
import * as colors from '@/constants/color.js';

export default {
  name: 'Analysis',
  components: { CcvDonutChart },
  // props: {
  //   qualityScore: Array,
  //   areaChart: Object
  // }
  data: function() {
    return {
      assets: [],
      pie_charts: {
        data: [
          {
            group: 'Dataset 2',
            value: 20000
          },
          {
            group: 'Dataset 1',
            value: 65000
          }
        ],
        options: {
          resizable: true,
          donut: {},
          legend: {
            alignment: 'center',
            enabled: false
          },
          pie: {
            labels: {
              enabled: false
            }
          },
          height: '20px',
          width: '20px',
          animations: {
            enabled: true
          },
          color: {
            scale: {
              'Dataset 1': colors.BLUE_COLOR,
              'Dataset 2': colors.GRAY_COLOR
            }
          }
        }
      },
      meter_charts: {
        data: [
          {
            title: 'Overlap analysis',
            data: [2, 3, 4, 2]
          },
          {
            title: 'Data analysis',
            data: [3, 1, 5, 3]
          },
          {
            title: 'Key relationships',
            data: [6, 8, 2]
          }
        ],
        colors: [
          colors.BLUE_COLOR,
          colors.RED_COLOR,
          colors.GREEN_COLOR,
          colors.GRAY_COLOR
        ]
      }
    };
  },
  created() {
    this.meter_charts.data.map(each => {
      each.total = each.data.reduce((sum, cur) => {
        return sum + cur;
      });
    });
  }
};
</script>
<style lang="scss" scoped>
@import '../../../../../styles/carbon-utils';
@import '../../../../../styles/carbon-texts';
@import '../../../../../styles/carbon-themes';
@import '@carbon/charts/styles-g90';

@import './_dashboard-overrides';

.analysis--panel {
  padding-top: $spacing-05;
  height: 300px;
}

.pie--charts_row {
  display: flex;
  justify-content: space-between;
  margin-top: $spacing-07;
  margin-bottom: $spacing-07;
  .each--chart {
  }

  .each--chart_title {
  }

  .each--chart_chart {
    margin-top: $spacing-02;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
  }
}

.meter--charts_row {
  width: 100%;
  .each--chart_meter {
    height: 45px;
    display: flex;
    flex-direction: column;
  }
  .each--chart_meter_title {
    display: flex;
    justify-content: space-between;
    .each--chart_meter_title_title {
      font-weight: 600;
      color: $icon-01;
    }
  }

  .each--chart_meter_chart {
    display: flex;
    justify-content: space-between;
    margin-top: $spacing-03;
  }
  .chart_meter_each_div {
    height: $spacing-02;
    margin-right: 1px;
  }
}
</style>
