import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Audio from "../views/Audio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/audio",
    name: "audio",
    component: Audio
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/hero",
    name: "hero",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HeroPanel.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
