<template>
  <div
    class="comaprison-chart"
  >
    <div
        class="chart"
        :style="{ width: this.chart.width, height: this.chart.height }"
    >
      <div
        class="bar bar-1"
        :style="{ 'background-color': this.bar1.color, width: bar1.width }"
      ></div>
      <div
        class="bar bar-2"
        :style="{ 'background-color': this.bar2.color, width: bar2.width }"
      ></div>
    </div>
    <div class="labels">
        <span>{{ bar1.label }}</span>
        <span>{{ bar2.label }}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    chart: {
      height: Number,
      width: Number,
    },
  },
  data() {
    return {
      bar1: {
        width: "35%",
        label: "Expenses",
        color: this.$store.state.colors[0],
      },
      bar2: {
        width: "12%",
        label: "Income",
        color: this.$store.state.colors[2],
      },
    };
  },
};
</script>

<style>
.chart {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
  background: lightgrey;
}

.bar {
  position: absolute;
  height: 100%;
}

.bar-1 {
  right: 50%;
}

.bar-2 {
  left: 50%;
}

.labels {
    display: flex;
}

.labels span {
    width: 50%;
    text-align: center;
    margin: 0;
}
</style>