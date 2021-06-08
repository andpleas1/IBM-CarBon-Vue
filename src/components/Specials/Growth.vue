<template>
  <div class="text_title_sm detail--each_growth">
    <ArrowUp16
      class="growth__icon growth__icon_green"
      v-if="growth.growth > 0"
    />
    <ArrowDown16
      class="growth__icon growth__icon_red"
      v-if="growth.growth < 0"
    />
    <span :class="growthClass">
      {{ Math.abs(growth.growth)
      }}<span :class="suffixClass">{{
        growth.suffix ? growth.suffix : ''
      }}</span>
    </span>
  </div>
</template>

<script>
import { ArrowDown16, ArrowUp16 } from '@carbon/icons-vue';

export default {
  name: 'Growth',
  components: {
    ArrowUp16,
    ArrowDown16
  },
  props: {
    growth: Object,
    growthClass: {
      type: String,
      default: 'text_content_sm'
    },
    suffixClass: {
      type: String,
      default: 'text_content_sm'
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/carbon-utils';
@import '../../styles/carbon-texts';
@import '../../styles/carbon-themes';

@import '@carbon/charts/styles-g100';
.detail--each_growth {
  display: flex;
  align-items: center;
}
</style>
