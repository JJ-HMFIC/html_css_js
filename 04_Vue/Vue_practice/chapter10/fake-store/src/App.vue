<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>
