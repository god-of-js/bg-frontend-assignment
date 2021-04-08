import Vue from "vue";
import VueRouter from "vue-router";
import Units from "../views/Units.vue";
import Unit from "../views/Unit.vue";
import SignIn from "../views/SignIn.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/units",
    name: "Units",
    component: Units,
    children: [
      {
        path: "/units/:id",
        name: "Unit",
        component: Unit,
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
