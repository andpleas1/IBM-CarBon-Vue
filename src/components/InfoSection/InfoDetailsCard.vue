<template>
  <div class="info-details-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-4">
    <div class="info-card__header text_title_sm">
      <div>Data assets</div>
      <div class="content-detail-header">Delta</div>
    </div>
    <div v-for="(each, idx) in data" :key="`data-assets-key-${idx}`">
      <div v-if="idx < 3" class="content-growth">
        <div class="text_content_sm">{{ each.heading }}</div>
        <div class="content-detail-body">
          <ArrowUp16
            class="growth__icon growth__icon_green"
            v-if="each.growth > 0"
          />
          <ArrowDown16
            class="growth__icon growth__icon_green"
            v-if="each.growth < 0"
          />
          <span class="text_content_sm"
            >{{ Math.abs(each.growth) }}{{ each.suffix }}</span
          >
        </div>
      </div>
    </div>
    <a
      v-if="data.length > 3"
      class="text_content_sm more-item_btn"
      @click="openModal"
    >
      +{{ data.length - 3 }} more
    </a>
  </div>
</template>

<script>
import { ArrowUp16, ArrowDown16 } from '@carbon/icons-vue';

export default {
  name: 'InfoDetailsCard',
  props: {
    data: Array,
    scoreModal: Function
  },
  components: { ArrowDown16, ArrowUp16 },
  computed: {
    // Take in a phrase and separate the third word in an array
  },
  methods: {
    openModal: function() {
      this.scoreModal();
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import '../../styles/carbon-texts';

.info-details-card {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
  &:hover {
    background-color: $inverse-02;
  }
  .info-card__header {
    display: flex;
    margin-bottom: $spacing-04;
    justify-content: space-between;
  }

  .content-detail-header {
    width: 50px;
  }

  .content-detail-body {
    width: 50px;
    display: flex;
    align-items: center;
  }

  .content-growth {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: $spacing-03;
  }

  .more-item_btn {
    color: $inverse-link;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
