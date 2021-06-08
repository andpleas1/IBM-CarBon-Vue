<template>
  <div
    class="content--sidebar"
    :style="[{ minWidth: `${sidebarStyle.width}px` }]"
  >
    <div class="content--close">
      <close-20 v-if="sidebarStyle.expanded" @click="minimize" />
      <OpenPanelFilledLeft20 v-else @click="expand" />
    </div>

    <div v-if="sidebarStyle.expanded" class="sidebar--main">
      <div class="sidebar--scoretab">
        <div class="score--meter">
          <div class="score--meter_title text_content_sm">
            {{ details.qualityScore.heading }}
          </div>
          <div class="score--meter_values">
            <div class="text_title_xlg">
              {{ details.qualityScore.current }}
              <span class="quality--score text_title_msd">
                {{ details.qualityScore.suffix }}
              </span>
            </div>
            <div class="qualityscore--delta">
              <growth
                :growth="details.qualityScore"
                :growthClass="'text_content_sm'"
              />
            </div>
          </div>

          <ccv-meter-chart
            :data="meterChart.data"
            :options="meterChart.options"
          />
        </div>
        <div class="other--detail">
          <div class="other--detail_title text_content_sm">
            {{ details.dataClasses.heading }}
          </div>
          <div class="detail--values">
            <div class="text_title_md">
              {{ details.dataClasses.current }}
              <span class="quality--score text_title_msd">
                {{ details.dataClasses.suffix }}
              </span>
            </div>
            <div class="qualityscore--delta">
              <growth
                :growth="details.dataClasses"
                :growthClass="'text_content_sm'"
              />
            </div>
          </div>
        </div>
        <div class="other--detail">
          <div class="other--detail_title text_content_sm">
            {{ details.selectedDataType.heading }}
          </div>
          <div class="detail--values">
            <div class="text_title_md">
              {{ details.selectedDataType.current }}
              <span class="quality--score text_title_msd">
                {{ details.selectedDataType.suffix }}
              </span>
            </div>
            <div class="qualityscore--delta">
              <growth
                :growth="details.selectedDataType"
                :growthClass="'text_content_sm'"
              />
            </div>
          </div>
        </div>

        <div class="other--detail">
          <div class="detail--status text_content_sm">
            <div class="status--key">Analysis status</div>
            <div class="status--value text_bold">
              {{ details.analysis.status }}
            </div>
          </div>

          <div class="detail--status text_content_sm">
            <div class="status--key">Last column anaylsis</div>
            <div class="status--value text_bold">
              {{ details.lastColumnAnalysis.status }}
            </div>
          </div>

          <div class="detail--status text_content_sm">
            <div class="status--key">Last DQ analysis</div>
            <div class="status--value text_bold">
              {{ details.lastDqAnalysis.date }}
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar--search">
        <cv-text-input
          v-model="sidebarSearch"
          placeholder="Find a column"
          @change="updateSideBarSearch"
        />
      </div>
      <cv-data-table
        :row-size="table.rowSize"
        :columns="table.columns"
        :pagination="table.basicPagination"
      >
        <template v-if="true" slot="data">
          <cv-data-table-row
            v-for="(each, rowIndex) in tableShow"
            :key="`${rowIndex}`"
          >
            <cv-data-table-cell>{{ each.name }}</cv-data-table-cell>
            <cv-data-table-cell>
              {{ each.score + (each.suffix ? each.suffix : '%') }}
            </cv-data-table-cell>
            <cv-data-table-cell>
              <Growth :growth="each" />
            </cv-data-table-cell>
          </cv-data-table-row>
        </template>
      </cv-data-table>
    </div>
  </div>
</template>

<script>
import { Close20, OpenPanelFilledLeft20 } from '@carbon/icons-vue';
import { CcvMeterChart } from '@carbon/charts-vue';

import $ from 'jquery';
import { Growth } from '@/components/Specials';

export default {
  name: 'Sidebar',
  components: {
    Close20,
    OpenPanelFilledLeft20,
    Growth,
    CcvMeterChart
  },
  data: function() {
    return {
      sidebarSearch: '',
      sidebarStyle: {
        width: 290,
        expanded: true
      },
      details: {
        qualityScore: {
          heading: 'Data quality score',
          current: 97,
          growth: -4,
          suffix: '%'
        },
        dataClasses: {
          heading: 'Selected data classes',
          current: 257,
          growth: -3
        },
        selectedDataType: {
          heading: 'Selected data type',
          current: 3008,
          growth: 3
        },
        analysis: {
          status: 'Completed'
        },
        lastColumnAnalysis: {
          status: 'Confirmed'
        },
        lastDqAnalysis: {
          date: 'Apr 07, 2018'
        }
      },
      scoreArray: [
        {
          name: 'Zip, email',
          score: 99,
          suffix: '%',
          growth: 0
        },
        {
          name: 'Age',
          score: 97,
          suffix: '%',
          growth: -3
        },
        {
          name: 'Address',
          score: 43,
          suffix: '%',
          growth: 7
        },
        {
          name: 'Cnn',
          score: 100,
          suffix: '%',
          growth: 9
        },
        {
          name: 'Name, person',
          score: 99,
          suffix: '%',
          growth: 0
        },
        {
          name: 'Credit_rating',
          score: 97,
          suffix: '%',
          growth: -3
        },
        {
          name: 'Email',
          score: 43,
          suffix: '%',
          growth: 7
        },
        {
          name: 'Gender',
          score: 100,
          suffix: '%',
          growth: 9
        },
        {
          name: 'Credit_rating',
          score: 97,
          suffix: '%',
          growth: -3
        },
        {
          name: 'Email',
          score: 43,
          suffix: '%',
          growth: 7
        },
        {
          name: 'Gender',
          score: 100,
          suffix: '%',
          growth: 9
        }
      ],
      meterChart: {
        data: [
          {
            value: 56
          }
        ],
        options: {
          meter: {
            peak: 90,
            status: {
              ranges: [
                {
                  range: [0, 50]
                },
                {
                  range: [50, 60]
                },
                {
                  range: [60, 100]
                }
              ]
            }
          },
          color: {
            gradient: {
              enabled: true
            }
          },
          legends: {
            enabled: false
          },
          height: '10px'
        }
      },
      table: {
        columns: ['Name', 'Score', 'Delta'],
        basicPagination: false,
        use_htmlData: true,
        rowSize: 'short'
      },
      tableShow: []
    };
  },
  methods: {
    minimize: function() {
      this.sidebarStyle.expanded = false;
      this.sidebarStyle.width = 40;
    },
    expand: function() {
      this.sidebarStyle.expanded = true;
      this.sidebarStyle.width = 290;
    },
    updateSideBarSearch: function() {
      if (!this.sidebarSearch) {
        this.tableShow = [...this.scoreArray];
        return;
      }
      this.tableShow = [];
      this.scoreArray.map(each => {
        if (
          (each.name !== null && each.name.indexOf(this.sidebarSearch) >= 0) ||
          (each.score !== null &&
            each.score.toString().indexOf(this.sidebarSearch) >= 0) ||
          (each.growth !== null &&
            each.growth.toString().indexOf(this.sidebarSearch) >= 0)
        )
          this.tableShow.push(each);
      });
    }
  },
  mounted() {
    this.tableShow = [...this.scoreArray];
    $('.bx--cc--spacer').css('display', 'none');
    $('.bx--cc--meter-title').css('display', 'none');
    $('.bx--cc--spacer').attr('height', '0px');
    $('.bx--cc--meter-title').attr('height', '0px');
    $('.bx--cc--layout').attr('height', '5px');
    $('.bx--cc--meter').attr('y', '0px');
    $('.bx--cc--meter rect').attr('height', '3');
    $('.bx--cc--meter rect').attr('y', '2');
  }
};
</script>

<style lang="scss" scoped>
@import '../../../styles/carbon-utils';
@import '../../../styles/carbon-texts';
@import '../../../styles/carbon-themes';

.content--sidebar {
  min-width: 290px;
  position: relative;
  border-right: 1px solid $active-secondary;
  @media (max-width: 1024px) {
    //do Smth
    max-width: 40px;
  }

  .content--close {
    position: absolute;
    top: 15px;
    right: 10px;
    color: $interactive-03;
    cursor: pointer;
  }

  .sidebar--main {
    @media (max-width: 1024px) {
      //do Smth
      display: none;
      width: 0px;
    }
    .qualityscore--delta {
      margin-left: $spacing-08;
      margin-bottom: $spacing-02;
    }

    .sidebar--scoretab {
      padding: $spacing-06;
      border-bottom: 1px solid $active-secondary;

      .score--meter_values {
        display: flex;
        align-items: flex-end;
        .quality--score {
          margin-left: -$spacing-03;
        }
      }

      .other--detail {
        margin-top: $spacing-07;
        .other--detail_title {
          margin-bottom: $spacing-02;
        }
        .detail--values {
          display: flex;
          align-items: flex-end;
        }
      }
      .detail--status {
        margin-bottom: $spacing-03;
        display: flex;
        .status--key {
          width: 150px;
        }
      }
    }
    .sidebar--search {
      padding: $spacing-03;
    }
    .sidebar--table {
    }
  }
}
</style>
