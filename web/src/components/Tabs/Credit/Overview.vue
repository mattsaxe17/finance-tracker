<template>
    <div>
        <card
            header
            header-title="Income and Expenses"
            header-button-icon="user"
            header-button-link=""
        >
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
import Card from "../../Card";

export default {
  components: {
    Card,
  },
};
</script>

<style>
</style>