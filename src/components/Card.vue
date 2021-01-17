<template>
  <div class="card">
      <div class="card-header">
          <h3>{{ headerTitle }}</h3>
          <a :href="headerButtonLink">
            <i 
                class="fa" 
                :class="'fa-' + headerButtonIcon"
            ></i>
          </a>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        header: Boolean,
        headerTitle: String,
        headerButtonIcon: String,
        headerButtonLink: String
    }
}
</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: white;
    width: 85vw;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.5); 
    box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.5);
    margin: 65px 0;
    font-family: 'Inter';
}

.card h3 {
    font-size: 16px;
    font-weight: 400;
}

.card-header {
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.card-header a {
    color: #999999;
}
</style>