import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import OperationalUnit from "../views/OperationalUnit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/uber-uns",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/loschzug/einsatzabteilung",
      name: "operational-unit",
      component: OperationalUnit,
    },
  ],
});

export default router;
