<template>
    <div>
        <card
            header
            header-title="Expense Summary"
        >
          <value-bar
            title="Living"
            :widthValue="1000"
            :value="234"
            :chart="valueBarData(0)"
          />
          <value-bar
            title="Discretionary"
            :widthValue="1000"
            :value="500"
            :chart="valueBarData(1)"
          />
          <value-bar
            title="Investment"
            :widthValue="1000"
            :value="290"
            :chart="valueBarData(2)"
          />
          <value-bar
            title="Other"
            :widthValue="1000"
            :value="789"
            :chart="valueBarData(3)"
          />
        </card>

        <card
          header
          header-title="Your Expenses"
          header-button
          header-button-icon="plus"
          header-button-link="/"
        >
          <card-row
            v-for="item in expenses.history"
            :key="item"
            :rowData="{
              text: {
                primary: item.text.primary,
                secondary: item.text.secondary,
              },
              date: {
                month: item.date.month,
                date: item.date.date
              },
              value: {
                isPositive: expenses.isPositive,
                amount: item.value.amount
              }
            }"
          />
        </card>

        <card
          header
          header-title="Expense Catagories"
          header-button
          header-button-icon="pen-nib"
          header-button-link="/"
          see-all
        >
          <card-row
            v-for="item in expenses.catagories"
            :key="item"
            :rowData="{
              text: {
                primary: item.text.primary,
                secondary: item.text.secondary,
              },
              value: {
                isPositive: expenses.isPositive,
                amount: item.value.amount
              }
            }"
          />
        </card>
    </div>
</template>

<script>
import Card from '../../Card';
import CardRow from '../../CardRow'
import ValueBar from '../../ValueBar'

export default {
  components: {
    Card,
    CardRow,
    ValueBar
  },
  data() {
    return {
      expenses: this.$store.state.cash.expenses,
    }
  },
  methods: {
    valueBarData(index) {
      return {
        width: '100%',
        height: '35px',
        color: this.$store.state.colors[index]
      }
    }
  }
};
</script>

<style>
</style>