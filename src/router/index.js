import Vue from "vue";
import VueRouter from "vue-router";
import Units from "../views/Units.vue";
import SignIn from "../views/SignIn.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/units",
    name: "units",
    component: Units,
    children: [
      {
        path: "/units/:id",
        name: "unit",
        component: () => import("../views/Unit.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
