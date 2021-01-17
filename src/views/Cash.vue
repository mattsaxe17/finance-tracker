<template>
  <div class="cash-view">
    <tab-bar :passedTabs="this.tabs" @set-current-tab="changeTab"></tab-bar>
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
import Card from '../components/Card'
import OverviewTab from '../components/Tabs/Cash/Overview'
import IncomeTab from '../components/Tabs/Cash/Income'
import ExpensesTab from '../components/Tabs/Cash/Expenses'
import TransfersTab from '../components/Tabs/Cash/Transfers'
import AccountsTab from '../components/Tabs/Cash/Accounts'
import TabBar from '../components/TabBar'

export default {
  components: {
    Card,
    OverviewTab,
    IncomeTab,
    ExpensesTab,
    TransfersTab,
    AccountsTab,
    TabBar
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        { id: 0, text: 'Overview', icon: 'home', component: 'OverviewTab' },
        { id: 1, text: 'Income', icon: 'money-check-alt', component: 'IncomeTab' },
        { id: 2, text: 'Expenses', icon: 'cart-arrow-down', component: 'ExpensesTab' },
        { id: 3, text: 'Transfers', icon: 'exchange-alt', component: 'TransfersTab' },
        { id: 4, text: 'Accounts', icon: 'link', component: 'AccountsTab' },
      ]
    }
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
}
</script>

<style>
.cash-view {
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>