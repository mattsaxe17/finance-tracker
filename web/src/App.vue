<template>
  <div :style="cssVars">
    <header-bar></header-bar>
    <hero></hero>
    <router-view />
  </div>
</template>

<script>
import "@fontsource/inter";
import HeaderBar from "./components/Header";
import Hero from "./components/Hero";

export default {
  components: {
    HeaderBar,
    Hero,
  },
  computed: {
    cssVars() {
      return {
        "--color-1": this.$store.state.colors[0],
        "--color-2": this.$store.state.colors[1],
        "--color-3": this.$store.state.colors[2],
        "--color-4": this.$store.state.colors[3],
        "--color-5": this.$store.state.colors[4],
        "--color-6": this.$store.state.colors[5],
      };
    },
  },
};
</script>

<style>
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
