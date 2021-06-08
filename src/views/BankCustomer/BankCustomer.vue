<template>
  <div class="content--wrapper">
    <Sidebar />
    <div class="content--main">
      <div class="bx--grid bx--grid--full-width dashboard-content_header">
        <div class="bankcustomer--header">
          <div class="header--titles">
            <div class="subTitle text_content_md text_bold">Data asset</div>
            <div class="title text_title_lg">Bank Customers</div>
            <div class="add--btns text_title_sm text_bold">
              <div class="add_rule_set">
                Add rule set +
              </div>
              <div class="add_rule">
                Add rule +
              </div>
            </div>
          </div>
          <div class="header--btns">
            <cv-button
              class="edit_btn"
              kind="tertiary"
              @click="actionClick"
              :icon="edit_btn_icon"
            >
              Edit
            </cv-button>
            <cv-button
              class="activity_btn"
              kind="primary"
              @click="actionClick"
              :icon="activity_btn_icon"
            >
              Analyze
            </cv-button>
          </div>
        </div>
        <div class="bx--row">
          <cv-tabs
            aria-label="navigation tab label dashboard--tab_wrapper"
            @tab-selected="actionSelected"
          >
            <cv-tab id="dashboard-tab" label="Data rules"></cv-tab>
            <cv-tab id="columns-tab" label="Columns"></cv-tab>
            <cv-tab id="dataQuality-tab" label="Data quality"></cv-tab>
            <cv-tab id="dataClasses-tab" label="Data classes"></cv-tab>
            <cv-tab id="governance-tab" label="Governance"></cv-tab>
            <cv-tab id="dataTypes-tab" label="Data types"></cv-tab>
            <cv-tab id="keys-tab" label="Keys"></cv-tab>
          </cv-tabs>
        </div>
      </div>
      <div class="bx--grid bx--grid--full-width dashboard-content_tab">
        <TabContainer :currentTab="current_tab" />
      </div>
    </div>
  </div>
</template>

<script>
//vuex
import { mapActions } from 'vuex';

import TabContainer from './Tabs';
import Sidebar from './Sidebar';
//Icons
import { Edit16, Activity32 } from '@carbon/icons-vue';

export default {
  name: 'BankCustomer',
  components: {
    Sidebar,
    TabContainer
  },
  data: function() {
    return {
      project: {
        name: 'AA_Dan1',
        creater: 'ampersandrew',
        createdAt: 'Jun23, 2020',
        description:
          'This project has many data sets in it. They have lots of data. This is what it would look like with a ton of text for a description',
        details: [
          {
            title: 'Data assets',
            value: 97,
            growth: -4,
            suffix: '%'
          },
          {
            title: 'PII data assets',
            value: 257,
            growth: -3,
            suffix: ''
          },
          {
            title: 'Reviewed data assets',
            value: 3008,
            growth: 2,
            suffix: ''
          },
          {
            title: 'Critical data assets',
            value: 5
          },
          {
            title: 'Connections',
            value: 9
          }
        ]
      },
      project_name: 'AA_Dan1',
      toggleDashHeader: true,
      activity_btn_icon: Activity32,
      edit_btn_icon: Edit16,
      current_tab: 0
    };
  },
  created() {
    this.setTitles(['Projects', this.project.name, 'Bank Customers']);
  },
  activated() {
    this.setTitles(['Projects', this.project.name, 'Bank Customers']);
  },
  methods: {
    ...mapActions({
      setTitles: 'App/setTitles'
    }),
    actionClick: function() {},
    toggleDashboardHeader: function() {
      this.toggleDashHeader = !this.toggleDashHeader;
    },
    actionSelected: function(index) {
      this.current_tab = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/carbon-utils';
@import '../../styles/carbon-texts';
@import '../../styles/carbon-themes';

.content--wrapper {
  display: flex;
  .content--main {
    width: 100%;
  }

  .bankcustomer--header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 150px;
    .header--titles {
      .subTitle {
        margin-bottom: $spacing-02;
      }
      .title {
        margin-bottom: $spacing-02;
      }
      .add--btns {
        display: flex;
        align-items: center;
        height: $spacing-06;
        color: $link-01;
        .add_rule_set {
          padding-right: $spacing-05;
          border-right: 1px solid $active-secondary;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .add_rule {
          margin-left: $spacing-05;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .header--btns {
      display: flex;
      flex-wrap: wrap;
      height: $spacing-07;
      .edit_btn {
        margin-right: $spacing-03;
        width: 130px;
      }
      .activity_btn {
        width: 130px;
      }
    }
  }
}
</style>
