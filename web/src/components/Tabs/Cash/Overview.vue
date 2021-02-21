<template>
  <div>
    <card
      header
      header-title="Income and Expenses"
      header-button-icon="user"
      header-button-link=""
    >
      <comparison-chart
        :chart="{ height: '50px', width: '100%' }"
      ></comparison-chart>
    </card>
    <card
      header
      header-title="Recent Transfers"
      header-button
      header-button-icon="plus"
      header-button-link="/"
    >
      <card-row
        v-for="item in overview.transfers.history"
        :key="item"
        double
        :rowData="{
          text: {
            primary: item.text.primary,
            secondary: overview.transfers.labels[0],
          },
          text2: {
            primary: item.text.secondary,
            secondary: overview.transfers.labels[1],
          },
          date: {
            month: item.date.month,
            date: item.date.date
          },
          value: {
            isPositive: overview.transfers.isPositive,
            amount: item.value.amount
          }
        }"
      />
    </card>

    <card
      header
      header-title="Accounts"
      header-button
      header-button-icon="plus"
      header-button-link="/"
    >
      <card-row
        v-for="item in overview.accounts.accounts"
        :key="item"
        :rowData="{
          text: {
            primary: item.text.primary,
            secondary: item.text.secondary,
          },
          value: {
            isPositive: overview.transfers.isPositive,
            amount: item.value.amount
          }
        }"
      />
    </card>
  </div>
</template>

<script>
import Card from "../../Card";
import CardRow from '../../CardRow'
import ComparisonChart from "../../ComparisonChart";

export default {
  components: {
    Card,
    CardRow,
    ComparisonChart,
  },
  data() {
    return {
      overview: {
        transfers: this.$store.state.cash.transfers,
        accounts: this.$store.state.cash.accounts,
      }
    }
  }
};
</script>

<style>
</style>