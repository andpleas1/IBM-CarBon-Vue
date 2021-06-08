<template>
  <div class="bx--grid bx--grid--full-width dataclasses--panel panel-bg">
    <div class="bx--row">
      <div class="bx--col-12-lg bx--col-md-12">
        <div class="board--title">
          <div class="text_title_msd">Top 5 selected data classes</div>
        </div>
        <div class="board--subtitle text_content_sm">
          {{ assets.length ? assets.length : 21 }} total assets
        </div>
      </div>
    </div>

    <div class="bx--row">
      <div class="circle--chart_wrapper">
        <div
          v-for="(each, idx) in circleChart"
          :key="`circle-chart-${idx}`"
          class="circle--chart_each"
        >
          <div class="chart--each_header">
            <div class="text_title_sm header_title">{{ each.title }}</div>
            <div class="text_content_sm">Total {{ each.total }}</div>
          </div>

          <cv-tooltip :tip="tip">
            <div class="chart--each_diagram">
              <div
                v-for="(item, index) in each.data"
                :key="`circle-chart-${idx}-${index}`"
                :ref="`circleChart${idx}${index}`"
                class="diagram--circle text_title_md"
                :style="[
                  {
                    height: ((item.value + 2) / (max + 2)) * 80 + 'px',
                    width: ((item.value + 2) / (max + 2)) * 80 + 'px',
                    border: `1px solid ${options.colors[index].color}`,
                    marginRight: '3px'
                  }
                ]"
              >
                <div
                  class="diagram--circle_trans"
                  :style="[
                    {
                      background: options.colors[index].color
                    }
                  ]"
                ></div>
                {{ item.value }}
              </div>
            </div>
          </cv-tooltip>
        </div>
      </div>

      <div class="circle--chart_legend">
        <a
          class="legend--item"
          v-for="(each, idx) in options.colors"
          :key="`circle--chart_legend-${idx}`"
          @mouseover="circleChartHover(idx)"
          @mouseleave="circleChartMouseLeave()"
        >
          <div class="legend--item-hover_btn"></div>
          <div
            class="legend--item_btn"
            :style="[{ background: each.color }]"
          ></div>
          <div class="text_content_sm">{{ each.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import * as circle_colors from '@/constants/color.js';

export default {
  name: 'DataClasses',
  components: {},
  data: function() {
    return {
      max: 0,
      assets: [],
      tip: 'we are here',
      options: {
        colors: [
          {
            title: 'Columns',
            color: circle_colors.BLUE_COLOR
          },
          {
            title: 'Data assets',
            color: circle_colors.GREEN_COLOR
          }
        ]
      },
      circleChart: [
        {
          title: 'Boolean',
          data: [
            {
              item: 'Columns',
              value: 5
            },
            {
              item: 'Data assets',
              value: 3
            }
          ]
        },
        {
          title: 'Person name',
          data: [
            {
              item: 'Columns',
              value: 1
            },
            {
              item: 'Data assets',
              value: 1
            }
          ]
        },
        {
          title: 'Code',
          data: [
            {
              item: 'Columns',
              value: 2
            },
            {
              item: 'Data assets',
              value: 2
            }
          ]
        },
        {
          title: 'Identifier',
          data: [
            {
              item: 'Columns',
              value: 3
            },
            {
              item: 'Data assets',
              value: 1
            }
          ]
        },
        {
          title: 'Text',
          data: [
            {
              item: 'column',
              value: 2
            },
            {
              item: 'Data assets',
              value: 1
            }
          ]
        }
      ]
    };
  },
  created() {
    this.max = 0;
    this.circleChart.map(each => {
      each.total = 0;
      each.data.map(each => {
        if (this.max < each.value) this.max = each.value;
        each.total += each.value;
      });
    });
  },
  methods: {
    circleChartHover: function(idx) {
      Object.entries(this.$refs).map(item => {
        if (item[0][item[0].length - 1] == idx) {
          item[1][0].style.opacity = 1;
        } else {
          item[1][0].style.opacity = 0.5;
        }
      });
    },
    circleChartMouseLeave: function() {
      Object.entries(this.$refs).map(item => {
        item[1][0].style.opacity = 1;
      });
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

.dataclasses--panel {
  padding-top: $spacing-05;
  height: 300px;
  .board--title {
    margin-bottom: $spacing-03;
  }
  .circle--chart_wrapper {
    margin-top: $spacing-07;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    .circle--chart_each {
      min-width: 140px;
      .header_title {
        margin-bottom: $spacing-01;
      }

      .chart--each_diagram {
        display: flex;
        align-items: flex-start;
      }

      .chart--each_header {
        margin-bottom: $spacing-07;
      }

      .diagram--circle {
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .diagram--circle_trans {
          border-radius: 100%;
          border: 1px solid;
          opacity: 0.2;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .circle--chart_legend {
    margin-top: $spacing-07;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .legend--item {
      cursor: pointer;
      display: flex;
      position: relative;
      margin-right: $spacing-05;
      .legend--item-hover_btn {
        position: absolute;
        top: -3px;
        left: -3px;
        background: $inverse-focus-ui;
        border-radius: 3px;
        height: 19px;
        width: 19px;
        opacity: 0;
        content: '``';
        z-index: 90;
      }
      .legend--item_btn {
        width: 13px;
        height: 13px;
        margin-right: $spacing-02;
        z-index: 100;
      }
      &:hover .legend--item-hover_btn {
        opacity: 1;
      }
    }
  }
}
</style>
