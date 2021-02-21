<template>
  <div class="tab-bar">
    <a
      class="tab"
      v-for="tab in this.tabs"
      :key="tab.id"
      :class="{ active: tab.id == this.currentTab }"
      @click="changeTab(tab.id)"
    >
      <i class="fa-lg fas" :class="'fa-' + tab.icon"></i>
      <p>{{ tab.text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    passedTabs: Array,
  },
  emits: ["setCurrentTab"],
  data() {
    return {
      currentTab: this.passedTabs[0].id,
      tabs: this.passedTabs,
    };
  },
  methods: {
    changeTab(tabId) {
      this.currentTab = tabId;
      this.$emit("setCurrentTab", tabId);
    },
  },
};
</script>

<style>
.tab-bar {
  width: 100%;
  background-color: white;
  display: flex;
  font-weight: 600;
}

.tab {
  width: 20vw;
  height: 20vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: darkgrey;
  background-color: white;
  text-align: center;
}

.tab i {
  margin: 0 0 10px 0;
}

.tab p {
  margin: 0;
  font-size: 14px;
}

.active {
  border-top: 3px solid var(--color-1);
  background-color: #ebebeb;
}

.active i {
  color: #f7b538;
}

.active p {
  color: black;
}
</style>