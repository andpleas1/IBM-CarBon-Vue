<template>
  <div id="app">
    <Header />
    <cv-content id="#main-content">
      <TitleHeader />
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import Header from './components/Header';
import TitleHeader from './components/TitleHeader';

export default {
  name: 'App',
  components: {
    Header,
    TitleHeader
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
