<template>
  <div class="value-bar">
    <p>{{ title }}</p>
    <div class="background" :style="{ height: chart.height, width: chart.width, justifyContent: valueBarAlign }">
      <div class="bar" :style="{ backgroundColor: chart.color, height: chart.height, width: `${(value / widthValue) * 100}%`}">
        <span>${{ value.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
    widthValue: Number,
    chart: Object,
  },
  computed: {
    valueBarAlign() {
      switch (this.$store.state.charts.valueBar.align) {
        case 'start':
          return 'flex-start';
        case 'center':
          return 'center';
        case 'end':
          return 'flex-end';
        default:
          return 'center';
      }
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 5px;
}

.value-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background {
  background-color: lightgrey;
  display: flex;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>