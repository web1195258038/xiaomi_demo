<template>
  <div id="app">
    <header></header>
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from './components/Tabbar.vue'
  import Header from './components/Header.vue'
  import './assets/js/remstyle.js'
export default {
  name: 'App',
  components:{
    Tabbar,
    Header
  },
  mounted(){
    this.$router.push("/home")
  }
}
</script>

<style>
 @import './assets/css/reset.css';
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
