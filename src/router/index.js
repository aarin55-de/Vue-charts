import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import DefectDensity from "../views/DefectDensity.vue";
import CodeInsight from "../views/CodeInsight.vue";
import AIMInsights from "../views/AIMInsights.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/defect-density",
      component: DefectDensity,
    },
    {
      path: "/code-insight",
      component: CodeInsight,
    },
    {
      path: "/aeim-insight",
      component: AIMInsights,
    },
  ],
});

export default router;
