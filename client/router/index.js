import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/page/home/index"),
    redirect: { name: "pageList" },
    children: [
      {
        path: "page-list",
        name: "pageList",
        component: () => import("@/page/home/page-list")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
