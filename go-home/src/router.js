import { store } from "./store";

import { createRouter, createWebHistory } from "vue-router";

const Homepage = () => import("./pages/Homepage.vue");
const Apartment = () => import("./pages/Apartment.vue");

const ErrorPage = () => import("./pages/ErrorPage.vue");
const LoginPage = () => import("./pages/Login.vue");
const RegistrationPage = () => import("./pages/Registration.vue");
const MyOrdersPage = () => import("./pages/MyOrders.vue");

const routes = [
  {
    path: "/",
    component: Homepage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: Apartment,
    name: "apartments",
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",

    meta: {
      hideForAuth: true,
    },
  },

  {
    path: "/register",
    component: RegistrationPage,
    name: "register-page",
    meta: {
      hideForAuth: true,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login-page" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "homepage" });
    }
  }

  next();
});

export default router;
