import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import List from "../views/List.vue";
import Details from "../views/Details.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/users/list",
      component: List,
    },
    {
      path: "/user/:username",
      component: Details,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
