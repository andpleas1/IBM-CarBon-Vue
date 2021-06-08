<template>
  <div
    class="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-4"
    v-bind:style="[first && { paddingLeft: '0px' }]"
  >
    <div v-if="icon" class="info-card-icon">
      <span v-if="iconColor == `blue`" class="head-round-icon icon-color-blue"
        ><RadioButton16
      /></span>
      <span v-if="iconColor == `white`" class="head-round-icon icon-color-white"
        ><RadioButton16
      /></span>
      <span v-if="iconColor == `green`" class="head-round-icon icon-color-green"
        ><RadioButton16
      /></span>
    </div>
    <div>
      <div class="info-card__header text_title_sm">{{ data.heading }}</div>
      <div class="info-card__body">
        <div class="content-type text_content_sm">{{ data.content }}</div>
        <div class="content-growth">
          <ArrowUp16
            class="growth__icon growth__icon_green"
            v-if="data.growth > 0"
          />
          <ArrowDown16
            class="growth__icon growth__icon_green"
            v-if="data.growth < 0"
          />
          <span class="text_title_lg">{{ Math.abs(data.growth) }}</span
          >&nbsp;
          <span class="text_content_md">{{ data.suffix }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowUp16, ArrowDown16, RadioButton16 } from '@carbon/icons-vue';

export default {
  name: 'InfoCard',
  props: {
    icon: Boolean,
    iconColor: String,
    heading: String,
    data: Object,
    first: {
      type: Boolean,
      defualt: false
    }
  },
  components: { ArrowDown16, ArrowUp16, RadioButton16 },
  computed: {
    // Take in a phrase and separate the third word in an array
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import '../../styles/carbon-texts';

.info-card {
  padding-top: $spacing-05;
  padding-bottom: $spacing-07;
  border-right: 1px solid $active-secondary;
  display: flex;
  justify-content: 'flex-start';
  &:hover {
    background-color: $inverse-02;
  }
  .info-card__header {
    display: flex;
    margin-bottom: $spacing-05;
  }

  .info-card-icon {
    margin-right: $spacing-03;
  }

  .info-card__body {
    margin-top: $spacing-02;
  }

  .content-type {
    margin-bottom: $spacing-02;
  }

  .content-growth {
    display: flex;
    align-items: center;
  }
}
</style>
