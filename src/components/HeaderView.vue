<template>
  <nav>
    <router-link class="link-item" to="/">Home</router-link>
    <router-link class="link-item" to="/about">About</router-link>
    <router-link class="link-item" to="/projects">Projects</router-link>
  </nav>
</template>

<script>
// import {RouterLink} from "vue-router"
export default {
  name: 'HeaderView',
  components:{
    // RouterLink
  }
  // component logic goes here
}
</script>


<style  scoped>
nav{
  display: flex;
  justify-content:center;
  gap: 1rem;
  margin: 1rem;
}

.link-item{
  cursor: pointer;
}

</style>
