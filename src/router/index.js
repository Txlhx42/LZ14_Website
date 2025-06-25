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
      beforeEnter: (to, from, next) => {
        const isAuthenticated =
          localStorage.getItem("adminAuthenticated") === "true";
        if (isAuthenticated) {
          next();
        } else {
          next("/admin-login");
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
