import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import OperationalUnit from "../views/OperationalUnit.vue";
import YouthFireDepartment from "../views/YouthFireDepartment.vue";
import DeconUnit from "../views/DeconUnit.vue";
import Contact from "../views/Contact.vue";
import Legal from "../views/Legal.vue";
import ElderDepartment from "../views/ElderDepartment.vue";

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
    {
      path: "/loschzug/jugendfeuerwehr",
      name: "youth-fire-department",
      component: YouthFireDepartment,
    },
    {
      path: "/loschzug/dekon-einheit",
      name: "dekon-unit",
      component: DeconUnit,
    },
    {
      path: "/kontakt",
      name: "contact",
      component: Contact,
    },
    {
      path: "/rechtliches",
      name: "legal",
      component: Legal,
    },
    {
      path: "/loschzug/ehrenabteilung",
      name: "elder-department",
      component: ElderDepartment,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
