<template>
  <div class="header" :style="{ 'background-color': $store.state.colors[0]}">
    <a href="">
        <i class="fas fa-bars fa-lg"></i>
    </a>
    <a href="">
        <i class="far fa-user fa-lg"></i>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header i {
  color: white;
}
</style>