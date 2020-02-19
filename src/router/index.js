import Vue from "vue";
import VueRouter from "vue-router";
import Panel1 from "../views/Panel1.vue";
import Panel3 from "../views/Panel3.vue";
import Panel5 from "../views/Panel5.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "panel1",
    component: Panel1
  },
  {
    path: "/panel3",
    name: "panel3",
    component: Panel3
  },
  {
    path: "/panel5",
    name: "panel5",
    component: Panel5
  }
];

const router = new VueRouter({
  routes
});

export default router;
