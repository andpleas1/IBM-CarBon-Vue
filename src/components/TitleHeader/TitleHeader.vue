<template>
  <div class="bx--grid bx--grid--full-width top-page_title_header">
    <div class="bx--row">
      <div class="bx--col-lg-16">
        <span v-for="(title, index) in getTitles" :key="`title-${index}`">
          <span v-if="index !== getTitles.length - 1">
            <cv-link :to="{ name: 'dashboardPage' }">{{ title }}</cv-link>
          </span>
          <span v-if="index !== getTitles.length - 1" class="slash-link">
            &nbsp;/&nbsp;
          </span>
          <span class="last-link-text" v-else>{{ title }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TitleHeader',
  computed: {
    ...mapGetters({
      getTitles: 'App/getTitles'
    })
  }
};
</script>

<style lang="scss" scoped>
@import '@carbon/themes/scss/themes';
@import '@carbon/colors/scss/mixins';
@import '../../styles/carbon-themes';
@include carbon--colors();

.top-page_title_header {
  height: 47px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $active-secondary;

  .last-link-text {
    color: $text-04;
    font-size: 0.875rem;
  }

  .slash-link {
    color: $interactive-03;
  }
}
</style>
