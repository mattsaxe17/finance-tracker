<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ headerTitle }}</h3>
      <a :href="headerButtonLink" v-if="headerButton">
        <i class="fa" :class="'fa-' + headerButtonIcon"></i>
      </a>
    </div>
    <slot></slot>
    <a :href="seeAllLink" v-if="seeAll" class="see-all">see all</a>
  </div>
</template>

<script>
export default {
  props: {
    header: Boolean,
    headerTitle: String,
    headerButton: Boolean,
    headerButtonIcon: String,
    headerButtonLink: String,
    seeAll: Boolean,
    seeAllLink: String,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: white;
  width: 85vw;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  margin: 65px 0;
}

.card h3 {
  font-size: 1.2em;
  font-weight: 400;
  margin: 0;
}

.card-header {
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 5px 20px 5px;
}

.card-header a {
  color: #999999;
}

.see-all {
  font-size: .75em;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: var(--color-2);
}
</style>