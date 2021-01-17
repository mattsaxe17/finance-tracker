<template>
  <div>
    <div id="page-tabs">
      <router-link to="/cash">Cash</router-link>
      <router-link to="/credit">Credit</router-link>
      <router-link to="/investments">Investments</router-link>
    </div>
    <hero-content></hero-content>
  </div>
</template>

<script>
import HeroContent from './HeroContent'

export default {
  components: {
    HeroContent
  }
};
</script>

<style>
</style>