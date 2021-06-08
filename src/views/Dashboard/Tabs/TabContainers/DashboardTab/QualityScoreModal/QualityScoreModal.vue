<template>
  <cv-modal
    size="md"
    :visible="scoreModal.visible"
    @modal-hidden="scoreModalHidden"
  >
    <template slot="label">
      <div class="text_title_msd">
        Decreasing data quality scores
      </div>
    </template>
    <template slot="title">
      <div class="text_content_sm">
        Showing {{ qualityScore.length }}/{{ qualityScore.length }} Last 7 days
      </div>
    </template>
    <template v-if="scoreModal.use_scrollingContent" slot="content">
      <div class="graph--wrapper">
        <div
          v-for="(each, idx) in [
            qualityScore[0],
            qualityScore[1],
            qualityScore[2]
          ]"
          :key="`graph-each-${idx}`"
          class="graph--each"
          @click="qualiyItemClick(idx)"
        >
          <div class="graph--title text_title_sm">
            {{ each.heading }}
          </div>
          <div class="graph--detail">
            <div class="detail--each">
              <div class="text_content_sm">Delta</div>
              <div class="text_title_sm detail--each_growth">
                <ArrowUp16
                  class="growth__icon growth__icon_green"
                  v-if="each.growth > 0"
                />
                <ArrowDown16
                  class="growth__icon growth__icon_green"
                  v-if="each.growth < 0"
                />
                <span class="text_title_sm">{{ Math.abs(each.growth) }}</span
                >&nbsp;
                <span class="text_title_sm">{{ each.suffix }}</span>
              </div>
            </div>
            <div class="detail--each">
              <div class="text_content_sm">Data quality score</div>
              <div class="text_title_sm detail--each_growth">
                <ArrowUp16
                  class="growth__icon growth__icon_green"
                  v-if="each.qualityScore.growth > 0"
                />
                <ArrowDown16
                  class="growth__icon growth__icon_green"
                  v-if="each.qualityScore.growth < 0"
                />
                <span class="text_title_sm">{{
                  Math.abs(each.qualityScore.growth) + each.qualityScore.suffix
                }}</span>
              </div>
            </div>
          </div>
          <ccv-area-chart :data="data" :options="options[idx]"></ccv-area-chart>
        </div>
      </div>
      <div class="table--wrapper">
        <cv-data-table
          :columns="table.columns"
          :pagination="table.basicPagination"
          ref="table"
        >
          <template v-if="true" slot="data">
            <cv-data-table-row
              v-for="(each, rowIndex) in qualityScore"
              :key="`${rowIndex}`"
              :value="`${rowIndex}`"
            >
              <cv-data-table-cell>{{ each.heading }}</cv-data-table-cell>
              <cv-data-table-cell>
                <div class="text_title_sm table--delta_cell">
                  <ArrowUp16
                    class="growth__icon growth__icon_green"
                    v-if="each.growth > 0"
                  />
                  <ArrowDown16
                    class="growth__icon growth__icon_green"
                    v-if="each.growth < 0"
                  />
                  <span class="text_content_sm">{{
                    Math.abs(each.growth) + each.suffix
                  }}</span>
                </div>
              </cv-data-table-cell>
              <cv-data-table-cell>
                <div class="table--quality-cell">
                  <div class="table--quality-cell_qualityscore">
                    <span class="text_content_sm">{{
                      Math.abs(each.qualityScore.growth) +
                        each.qualityScore.suffix
                    }}</span>
                  </div>
                  <ccv-line-chart
                    :data="data"
                    :options="lineOption"
                  ></ccv-line-chart>
                </div>
              </cv-data-table-cell>
            </cv-data-table-row>
          </template>
        </cv-data-table>
      </div>
    </template>
  </cv-modal>
</template>

<script>
import $ from 'jquery';
import * as colors from '@/constants/color.js';

import { ArrowUp16, ArrowDown16 } from '@carbon/icons-vue';
import { CcvAreaChart, CcvLineChart } from '@carbon/charts-vue';

export default {
  name: 'QualityScoreModal',
  props: {
    qualityScore: Array,
    scoreModal: Object
  },
  components: {
    ArrowUp16,
    ArrowDown16,
    CcvAreaChart,
    CcvLineChart
  },
  data: function() {
    return {
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
      options: [
        {
          animations: true,
          axes: {
            bottom: {
              visible: false,
              scaleType: 'time'
            },
            left: {
              visible: false,
              mapsTo: 'value',
              scaleType: 'linear'
            }
          },
          color: {
            gradient: {
              enabled: true
            },
            scale: {
              'Customer ID': colors.BLUE_COLOR
            }
          },
          grid: {
            x: { enabled: false },
            y: { enabled: false }
          },
          legend: {
            enabled: false
          },
          height: '70px'
        },
        {
          animations: true,
          axes: {
            bottom: {
              visible: false,
              scaleType: 'time'
            },
            left: {
              visible: false,
              mapsTo: 'value',
              scaleType: 'linear'
            }
          },
          color: {
            gradient: {
              enabled: true
            },
            scale: {
              'Customer ID': colors.WHITE_COLOR
            }
          },
          grid: {
            x: { enabled: false },
            y: { enabled: false }
          },
          legend: {
            enabled: false
          },
          height: '70px'
        },
        {
          animations: true,
          axes: {
            bottom: {
              visible: false,
              scaleType: 'time'
            },
            left: {
              visible: false,
              mapsTo: 'value',
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
            x: { enabled: false },
            y: { enabled: false }
          },
          legend: {
            enabled: false
          },
          height: '70px'
        }
      ],
      lineOption: {
        animations: true,
        axes: {
          bottom: {
            visible: false,
            scaleType: 'time'
          },
          left: {
            visible: false,
            mapsTo: 'value',
            scaleType: 'linear'
          }
        },
        color: {
          gradient: {
            enabled: true
          },
          scale: {
            'Customer ID': colors.GRAY_COLOR
          }
        },
        points: {
          enabled: false
        },
        grid: {
          x: { enabled: false },
          y: { enabled: false }
        },
        legend: {
          enabled: false
        },
        height: '50px',
        curve: 'curveMonotoneX',
        width: '100px'
      },
      table: {
        columns: ['Data assets', 'Delta', 'Data quality score'],
        basicPagination: false,
        use_htmlData: true
      }
    };
  },
  mounted() {
    $('.bx--modal-content').css('background-color', '#161616');
    $('.bx--modal-content').css('padding', '0px');

    $('.ccv-area-chart').css('background', 'transparent');
    $('.ccv-line-chart').css('background', 'transparent');
    $('.chart-grid-backdrop').css('fill', 'transparent');
  },
  methods: {
    scoreModalHidden: function() {
      this.$parent.scoreModalHidden();
    },
    qualiyItemClick: function(idx) {
      this.$parent.redirectPage(idx);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../../../styles/carbon-utils';
@import '../../../../../../styles/carbon-texts';
@import '../../../../../../styles/carbon-themes';

$carbon--theme: $carbon--theme--g90;
@include carbon--theme();

@import '@carbon/charts/styles-g100';

.graph--wrapper {
  display: flex;
  justify-content: space-between;
  background-color: $button-separator;
  width: 100%;
  overflow: hidden;
  align-items: center;
  .graph--each {
    cursor: pointer;
    padding-left: $spacing-05;
    padding-right: $spacing-05;
    padding-top: $spacing-04;
    display: flex;
    height: 150px;
    flex-direction: column;
    width: 33%;
    justify-content: space-around;
    &:hover {
      background: $ui-01;
    }
    .grach--title {
    }
    .graph--detail {
      display: flex;
      justify-content: space-between;
      height: 35px;
      .detail--each {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        .detail--each_growth {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
.table--wrapper {
  overflow: hidden;
  .table--delta_cell {
    display: flex;
    align-items: center;
  }
  .table--quality-cell {
    align-items: center;
    display: flex;
    .table--quality-cell_qualityscore {
      margin-right: $spacing-05;
    }
  }
}
</style>
