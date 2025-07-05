import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import OperationalUnit from "../views/OperationalUnit.vue";
import YouthFireDepartment from "../views/YouthFireDepartment.vue";
import DeconUnit from "../views/DeconUnit.vue";
import Contact from "../views/Contact.vue";
import Legal from "../views/Legal.vue";
import ElderDepartment from "../views/ElderDepartment.vue";
import Aktuelles from "../views/Aktuelles.vue";
import BlogPost from "../views/BlogPost.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AdminLogin from "../views/AdminLogin.vue";
import MTF01 from "../views/MTF01.vue";
import HLF10 from "../views/HLF10.vue";
import LFKatS from "../views/LFKatS.vue";
import DekonP01 from "../views/DekonP01.vue";
import DekonP02 from "../views/DekonP02.vue";
import { authService } from "../utils/supabase.js";

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
    {
      path: "/aktuelles",
      name: "aktuelles",
      component: Aktuelles,
    },
    {
      path: "/aktuelles/:id",
      name: "blog-post",
      component: BlogPost,
    },
    {
      path: "/admin-login",
      name: "admin-login",
      component: AdminLogin,
    },
    {
      path: "/admin",
      name: "admin-dashboard",
      component: AdminDashboard,
      beforeEnter: async (to, from, next) => {
        const user = await authService.getCurrentUser();
        if (user) {
          next();
        } else {
          next("/admin-login");
        }
      },
    },
    {
      path: "/technik/14-mtf-01",
      name: "technik-mtf-01",
      component: MTF01,
    },
    {
      path: "/technik/14-hlf-10-01",
      name: "technik-hlf-10-01",
      component: HLF10,
    },
    {
      path: "/technik/14-lfkats-02",
      name: "technik-lfkats-02",
      component: LFKatS,
    },
    {
      path: "/technik/14-dekon-p-01",
      name: "technik-dekon-p-01",
      component: DekonP01,
    },
    {
      path: "/technik/14-dekon-p-02",
      name: "technik-dekon-p-02",
      component: DekonP02,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
