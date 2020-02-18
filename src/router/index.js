import Vue from "vue";
import VueRouter from "vue-router";
import Panel1 from "../views/Panel1.vue";
import Panel2 from "../views/Panel2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "panel1",
    component: Panel1
  },
  {
    path: "/panel2",
    name: "panel2",
    component: Panel2
  }
];

const router = new VueRouter({
  routes
});

export default router;
