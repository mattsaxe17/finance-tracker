<template>
  <div class="credit-view">
    <tab-bar :passedTabs="this.tabs" @set-current-tab="changeTab"></tab-bar>
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
import Card from "../components/Card";
import OverviewTab from "../components/Tabs/Credit/Overview";
import PaymentsTab from "../components/Tabs/Credit/Payments";
import AccountsTab from "../components/Tabs/Credit/Accounts";
import TabBar from "../components/TabBar";

export default {
  components: {
    Card,
    OverviewTab,
    PaymentsTab,
    AccountsTab,
    TabBar,
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        { id: 0, text: "Overview", icon: "home", component: 'OverviewTab' },
        { id: 1, text: "Payments", icon: "credit-card", component: 'PaymentsTab' },
        { id: 2, text: "Accounts", icon: "link", component: 'AccountsTab' },
      ],
    };
  },
  methods: {
    changeTab(tabId) {
      this.currentTab = tabId;
    },
  },
  computed: {
    currentTabComponent() {
      return this.tabs[this.currentTab].component;
    },
  },
};
</script>

<style>
.credit-view {
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>