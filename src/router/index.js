/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    meta: {
      loginRequire: false,
      title: "LAL Porfolio",
    },
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../views/HomePage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const DEFAULT_TITLE = "LAL Porfolio";
router.afterEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
