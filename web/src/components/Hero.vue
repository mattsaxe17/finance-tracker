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
  },
};
</script>

<style>
#page-tabs {
  padding: 30px 15px;
}

#page-tabs a {
  font-family: "Inter";
  font-weight: bold;
  font-size: 24px;
  color: darkgrey;
  padding-bottom: 10px;
  margin-right: 15px;
  font-weight: 800;
  text-decoration: none;
}

#page-tabs a.router-link-active {
  color: rgb(20, 20, 20);
  border-bottom: 3px solid var(--color-1);
}
</style>