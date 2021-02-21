<template>
  <div class="hero-content">
      <p class="label">{{ labelText }}</p>
      <p class="money-value"><span>$</span>{{ moneyValue }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        labelText() {
            if(this.$route.name == 'Cash') return 'Liquid cash value';
            if(this.$route.name == 'Credit') return 'Credit balance';
            if(this.$route.name == 'Investments') return 'Value of investments';
            return '';
        },
        moneyValue() {
            if(this.$route.name == 'Cash') return 534//this.$store.state.cashVal;
            if(this.$route.name == 'Credit') return 123//this.$store.state.creditVal;
            if(this.$route.name == 'Investments') return 234//this.$store.state.investmentsVal;
            return 0;
        }
    }
};
</script>

<style scoped>
.hero-content {
    font-weight: 600;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.label {
    margin: 0 0 15px 0;
    font-size: 16px;
}

.money-value {
    margin: 0;
    font-size: 36px;
}

.money-value span {
    font-size: 40px;
    color: rgb(70, 70, 70);
}
</style>