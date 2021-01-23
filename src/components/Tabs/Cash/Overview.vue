<template>
    <div>
        <card
            header
            header-title="Income and Expenses"
            header-button-icon="user"
            header-button-link=""
        >
          <comparison-chart
            :bar1Color="'maroon'"
            :bar2Color="'#b85b27'"
            :chart="{ height: '50px', width: '100%'}"
          ></comparison-chart>
        </card>
        <card
          header
          header-title="Most Recent Transfers"
          header-button-icon="plus"
          header-button-link=""
        >
        </card>
    </div>
</template>

<script>
import Card from "../../Card"
import ComparisonChart from '../../ComparisonChart'

export default {
  components: {
    Card,
    ComparisonChart
  },
};
</script>

<style>
</style>