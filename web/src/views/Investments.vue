<template>
  <div class="investments-view">
    <tab-bar :passedTabs="this.tabs" @set-current-tab="changeTab"></tab-bar>
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
import Card from "../components/Card";
import OverviewTab from "../components/Tabs/Investments/Overview";
import StocksAndBondsTab from "../components/Tabs/Investments/Stocks_and_Bonds";
import RetirementTab from "../components/Tabs/Investments/Retirement";
import OtherTab from "../components/Tabs/Investments/Other";
import AccountsTab from "../components/Tabs/Investments/Accounts";
import TabBar from "../components/TabBar";

export default {
  components: {
    Card,
    OverviewTab,
    StocksAndBondsTab,
    RetirementTab,
    OtherTab,
    AccountsTab,
    TabBar,
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        { id: 0, text: "Overview", icon: "home", component: 'OverviewTab' },
        { id: 1, text: "Stocks & Bonds", icon: "chart-pie", component: 'StocksAndBondsTab' },
        { id: 2, text: "Retirement", icon: "piggy-bank", component: 'RetirementTab' },
        { id: 3, text: "Other", icon: "hand-holding-usd", component: 'OtherTab' },
        { id: 4, text: "Accounts", icon: "link", component: 'AccountsTab' },
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
.investments-view {
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>