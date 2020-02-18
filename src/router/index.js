import Vue from "vue";
import VueRouter from "vue-router";
import Horizontal from "../views/Horizontal.vue";
import Vertical from "../views/Vertical.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "horizontal",
    component: Horizontal
  },
  {
    path: "/vertical",
    name: "vertical",
    component: Vertical
  }
];

const router = new VueRouter({
  routes
});

export default router;
