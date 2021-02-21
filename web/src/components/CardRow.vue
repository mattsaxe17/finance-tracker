<template>
  <div class="card-row">
    <div class="date" v-if="rowData.date">
      <p class="primary-text">
        <span>{{ rowData.date.month }}</span><br />
        <span>{{ rowData.date.date }}</span>
      </p>
    </div>

    <div class="row-group">
      <div class="double-row-group">
        <div class="text">
          <p class="secondary-text" v-if="double">from</p>
          <p class="primary-text">{{ rowData.text.primary }}</p>
          <p class="secondary-text" v-if="!double">{{ rowData.text.secondary }}</p>
        </div>

        <div class="text" v-if="double">
          <p class="secondary-text">to</p>
          <p class="primary-text">{{ rowData.text2.primary }}</p>
        </div>
      </div>

      <div class="transaction" v-if="rowData.value">
        <p class="tertiary-text">
          <span v-if="rowData.value.isPositive === null"></span>
          <span v-else-if="!rowData.value.isPositive">-&nbsp;</span>
          <span v-else-if="rowData.value.isPositive">+&nbsp;</span>
          ${{rowData.value.amount}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rowData: Object,
    double: Boolean
  },
};
</script>

<style scoped>
.card-row {
  display: flex;
  padding: 8px 0;
}

.date {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5px;
}

.row-group {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.double-row-group {
  display: flex;
  flex-direction: column;
}

.primary-text {
  font-size: 1em;
  font-weight: bold;
  margin: 0;
}

.secondary-text {
  font-size: 0.8em;
  margin: 0;
  color: grey;
}
</style>