<template>
  <div id="app">
    <TheNavbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  name: "app",
  components: {
    TheNavbar
  }
};
</script>

<style>
@import "assets/css/style.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
