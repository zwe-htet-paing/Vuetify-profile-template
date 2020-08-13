import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import WorkProgress from "../views/WorkProgress.vue";
import DailyCalendar from "../views/DailyCalendar.vue";
import Page from "../views/Page.vue";
import Profile from "../views/Profile.vue";
import Chart from "../views/Chart.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/workprogress",
    name: "WorkProgress",
    component: WorkProgress,
  },
  {
    path: "/dailycalendar",
    name: "DailyCalendar",
    component: DailyCalendar,
  },

  //test.vue
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detections",
    component: Page,
  },
  {
    path: "/comp",
    component: Page,
  },
  {
    path: "/customers",
    component: Page,
  },
  {
    path: "/orders",
    component: Page,
  },
  {
    path: "/settings",
    component: Page,
  },
  //test.vue
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});




export default router;
