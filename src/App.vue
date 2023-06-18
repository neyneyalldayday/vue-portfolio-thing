<template>
  <div id="app">
    <div id="nav">
      <router-link class="link-item" to="/">Home</router-link>
      <router-link class="link-item" to="/about">About</router-link>
      <router-link class="link-item" to="/projects">Projects</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer>
      <div class="footer-content">
          <h3>contact me</h3>
          <ul class="footer-items">
            <li>linkedin</li>
            <li>github</li>
            <li>rmtrevino413@gmail.com</li>
          </ul>
      </div>
    </footer>
  </div>  
</template>

<script>


</script>

<style>

*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-bottom: solid 2px #780000;
  padding: 2rem;
  background-color: #c1121f;
}

.link-item{
  color: #fdf0d5;
  cursor: pointer;
}


footer{
  display: flex;
  background-color: #003049;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.footer-items{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
}

.footer-items li{
  color: #fdf0d5;
}
.footer-content h3{
  color: #fdf0d5;
}
</style>
