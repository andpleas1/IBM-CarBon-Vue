<template>
  <div>
    <div class="bx--grid bx--grid--full-width dashboard-content_header">
      <div class="bx--row">
        <div class="bx--col-lg-5">
          <div class="project__name-wrapper">
            <div class="project__name text_title_lg">
              {{ project.name }}
              <button
                class="v-button drop__Btn bx--btn bx--btn--icon-only bx--btn--ghost bx--btn--sm"
                @click="toggleDashboardHeader"
              >
                <ChevronUp16 v-if="toggleDashHeader" class="btn-icon" />
                <ChevronDown16 v-if="!toggleDashHeader" class="btn-icon" />
              </button>
            </div>
          </div>
          <div v-if="toggleDashHeader">
            <div class="project__detail text_content_sm">
              <div class="project__creater">
                Created by {{ project.creater }}
              </div>
              <div class="project__modified">
                Last modified {{ project.createdAt }}
              </div>
            </div>
            <div class="project__description">
              <div class="description__title text_title_sm">
                Description<Edit16 class="description__title-edit" />
              </div>
              <div class="project__description_content text_content_sm">
                {{ project.description }}
              </div>
            </div>
          </div>
        </div>
        <div class="bx--offset-xlg-2"></div>
        <div class="bx--col-lg-9 project__details_wrapper">
          <div class="project__detail_values">
            <div v-if="toggleDashHeader">
              <div class="text_title_sm">Details</div>
              <div
                v-for="(item, index) in project.details"
                :key="`project-details-${index}`"
                class="each__detail text_content_sm"
              >
                <div class="each__detail-item">
                  {{ item.title }}
                </div>
                <div class="each__detail-value">
                  {{ item.value + (item.suffix ? item.suffix : '') }}
                </div>
                <div class="each__detail-growth">
                  <ArrowUp16
                    class="growth__icon growth__icon_green"
                    v-if="item.growth > 0"
                  />
                  <ArrowDown16
                    class="growth__icon growth__icon_red"
                    v-if="item.growth < 0"
                  />
                  {{
                    item.growth
                      ? Math.abs(item.growth) + (item.suffix ? item.suffix : '')
                      : ''
                  }}
                </div>
              </div>
            </div>
          </div>
          <div class="add__btn-wrapper">
            <cv-button
              class="add_btn"
              kind="primary"
              @click="actionClick"
              :icon="add_btn_icon"
            >
              Add data asset
            </cv-button>
          </div>
        </div>
      </div>
      <div class="bx--row">
        <cv-tabs
          aria-label="navigation tab label dashboard--tab_wrapper"
          @tab-selected="actionSelected"
        >
          <cv-tab id="dashboard-tab" label="Dashboard"> </cv-tab>
          <cv-tab id="dataAssets-tab" label="Data Assets"> </cv-tab>
          <cv-tab id="dataRules-tab" label="Data Rules"></cv-tab>
          <cv-tab id="relationships-tab" label="Relationships"></cv-tab>
          <cv-tab id="columnSimilarity-tab" label="Column similarity"></cv-tab>
          <cv-tab id="settings-tab" label="Settings"></cv-tab>
        </cv-tabs>
      </div>
    </div>
    <div class="bx--grid bx--grid--full-width dashboard-content_tab">
      <TabContainer :currentTab="current_tab" />
    </div>
  </div>
</template>

<script>
import TabContainer from './Tabs';
import { mapActions } from 'vuex';
//Icons
import {
  ArrowUp16,
  ArrowDown16,
  Edit16,
  Add16,
  ChevronDown16,
  ChevronUp16
} from '@carbon/icons-vue';

export default {
  name: 'Dashboard',
  components: {
    Edit16,
    ArrowUp16,
    ArrowDown16,
    TabContainer,
    ChevronDown16,
    ChevronUp16
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
      add_btn_icon: Add16,
      current_tab: 0
    };
  },
  activated() {
    this.setTitles(['Projects', this.project.name]);
  },
  mounted() {
    this.setTitles(['Projects', this.project.name]);
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

<style lang="scss">
@import '../../styles/carbon-utils';
@import '../../styles/carbon-texts';
@import '../../styles/carbon-themes';
@import './carbon-overrides';
@import './mixins';
</style>
