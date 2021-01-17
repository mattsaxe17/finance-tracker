<template>
  <div>
    <header-bar></header-bar>
    <hero></hero>
    <router-view/>
  </div>
</template>

<script>
import '@fontsource/inter'
import HeaderBar from './components/Header'
import Hero from './components/Hero'

export default {
  components: {
    HeaderBar,
    Hero
  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

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

#page-tabs a.router-link-exact-active {
  color: rgb(20, 20, 20);
  border-bottom: 3px solid maroon;
}
</style>
