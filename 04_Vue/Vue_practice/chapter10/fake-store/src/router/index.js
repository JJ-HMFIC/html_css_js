import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ElectronicsPage from "../pages/ElectronicsPage.vue";
import JeweleryPage from "../pages/JeweleryPage.vue";
import MensClothingPage from "../pages/MensClothingPage.vue";
import WomensClothingPage from "../pages/WomensClothingPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/electronics", name: "electronics", component: ElectronicsPage },
  { path: "/jewelery", name: "jewelery", component: JeweleryPage },
  { path: "/mensclothing", name: "mensclothing", component: MensClothingPage },
  {
    path: "/womenclothing",
    name: "womenclothing",
    component: WomensClothingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
