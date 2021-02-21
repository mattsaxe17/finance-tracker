<template>
  <div>
    <card
      header
      header-title="Income Sources"
      header-button
      header-button-icon="plus"
      header-button-link="/"
    >
      <card-row
        v-for="item in income.sources"
        :key="item"
        :rowData="{
          text: {
            primary: item.primary,
            secondary: item.secondary,
          },
        }"
      />
    </card>

    <card
      header
      header-title="Income Allocation"
      header-button
      header-button-icon="pen-nib"
      header-button-link="/"
    >
      <div class="chart-wrapper">
        <chart
          chart-id="income-allocation-pie-chart"
          :chart-obj="chartData.incomeAllocation"
          :size="{ width: '100%', height: '100%' }"
        />
      </div>
    </card>

    <card
      header
      header-title="Your Income"
      header-button
      header-button-icon="plus"
      header-button-link="/"
      see-all
      see-all-link="/"
    >
      <card-row
        v-for="item in income.history"
        :key="item"
        :rowData="{
          text: item.text,
          date: item.date,
          value: item.value
        }"
      />
    </card>
  </div>
</template>

<script>
import Card from "../../Card";
import CardRow from "../../CardRow";
import Chart from "../../Chart";
import 'chartjs-plugin-datalabels';

export default {
  components: {
    Card,
    CardRow,
    Chart,
  },
  data() {
    return {
      income: this.$store.state.cash.income,
      chartData: {
        incomeAllocation: {
          type: "pie",
          data: {
            labels: this.$store.state.cash.income.allocation.map((item) => {
              return item.key;
            }),
            datasets: [
              {
                data: this.$store.state.cash.income.allocation.map((item) => {
                  return item.value;
                }),
                backgroundColor: this.$store.state.colors,
              },
            ],
          },
          options: {
            legend: {
              position: "bottom",
            },
            plugins: {
              datalabels: {
                color: 'white',
                formatter: function(value) {
                  return value + '%';
                },
                anchor: 'end',
                align: 'start',
              }
            },
          },
        },
      },
    };
  },
};
</script>

<style>
.chart-wrapper {
  width: 310px;
  height: 310px;
}
</style>