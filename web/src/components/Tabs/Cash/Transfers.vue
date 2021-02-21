<template>
  <div>
    <card
      header
      header-title="Your Transfers"
      header-button
      header-button-icon="plus"
      header-button-link="/"
    >
      <card-row
        v-for="item in transfers.history"
        :key="item"
        double
        :rowData="{
          text: {
            primary: item.text.primary,
            secondary: transfers.labels[0],
          },
          text2: {
            primary: item.text.secondary,
            secondary: transfers.labels[1],
          },
          date: {
            month: item.date.month,
            date: item.date.date,
          },
          value: {
            isPositive: transfers.isPositive,
            amount: item.value.amount,
          },
        }"
      />
    </card>
  </div>
</template>

<script>
import Card from "../../Card";
import CardRow from '../../CardRow'

export default {
  components: {
    Card,
    CardRow
  },
  data() {
    return {
      transfers: this.$store.state.cash.transfers
    }
  }
};
</script>

<style>
</style>