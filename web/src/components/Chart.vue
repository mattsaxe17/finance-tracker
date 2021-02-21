<template>
  <canvas :id="chartId" :width="this.size.width" :height="this.size.height"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'Chart',
  props: ['chartId', 'size', 'chartObj'],
  mounted() {
    var ctx = this.chartId;

    new Chart(ctx, this.chartObj)
  }
}
</script>

<style>

</style>