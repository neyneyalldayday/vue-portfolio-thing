<template>
  <HeaderView/>
  <HeroView/>
</template>

<script>
// import router from './router';
import HeaderView from './components/HeaderView.vue';
import HeroView from './components/HeroView.vue';
export default {
  name: 'App',
  // router,
  components: {    
    HeaderView,
    HeroView
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
