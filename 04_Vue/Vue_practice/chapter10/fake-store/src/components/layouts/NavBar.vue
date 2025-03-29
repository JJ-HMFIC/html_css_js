<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Fake Store</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li v-for="menu in menus" :key="menu.url" class="nav-item">
          <router-link :to="menu.url" class="nav-link">
            <i :class="menu.icon"></i> {{ menu.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import config from "../../config/index.js";

export default {
  data() {
    return {
      menus: config.menus,
    };
  },
};
</script>
