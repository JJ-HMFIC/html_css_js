// import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/pages/Home.vue";
// import About from "@/pages/About.vue";
// import Members from "@/pages/Members.vue";
// import Videos from "@/pages/Videos.vue";
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: "/", component: Home },
//     { path: "/about", component: About },
//     { path: "/members", component: Members },
//     { path: "/videos", component: Videos },
//   ],
// });
// export default router;
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
{
path: '/',
name: 'home',
component: HomeView
},
{
path: '/about',
name: 'about',
// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import('../views/AboutView.vue')
}
]
})
export default router