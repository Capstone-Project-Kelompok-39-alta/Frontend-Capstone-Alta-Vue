import Vue from "vue";
import VueRouter from "vue-router";
import ClientsView from "../views/ClientsView.vue";
import TransactionView from "../views/TransactionView.vue";
import HistoryEmailView from "../views/HistoryEmailView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import InvoiceView from "../views/InvoiceView.vue";
import ManageAccountView from "../views/ManageAccountView.vue";
import Default from "../views/DefaultView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: Default,
    children: [
      {
        path: "",
        name: "dashboard",
        component: DashboardView,
      },
      {
        path: "/transaction",
        name: "transaction",
        component: TransactionView,
      },
      {
        path: "/history",
        name: "history",
        component: HistoryEmailView,
      },
      {
        path: "/account",
        name: "account",
        component: ManageAccountView,
      },
      {
        path: "/clients",
        name: "clients",
        component: ClientsView,
      },
      {
        path: "/invoice",
        name: "invoice",
        component: InvoiceView,
      },
    ],
    meta: {
      auth: true,
    },
  },

  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: {
      token: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      token: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const store = JSON.parse(localStorage.getItem("vuex")) || null;
  console.log(store);

  if ((store && !store?.auth?.token && to.matched.some((record) => record.meta.auth)) || (!store && to.matched.some((record) => record.meta.auth))) {
    next("/register");

    console.log(1);
  } else if (to.matched.some((record) => record.meta.token) && store && store.auth.token) {
    next("/dashboard");
    console.log(2);
  } else {
    next();
    console.log(3);
  }
});

// router.beforeEach((to, _, next) => {
//   console.log(2);
//   const storeString = localStorage.getItem("vuex") || "{}";
//   const store = JSON.parse(storeString);

//   if (store && store.auth.token && to.matched.some((record) => record.meta.auth)) {
//     next("/dashboard");
//   } else if (!store) {
//     next("/register");
//   } else {
//     next();
//   }
// });

// function nextFactory(context, middleware, index) {
//   const subsequentMiddleware = middleware[index];
//   // If no subsequent Middleware exists,
//   // the default `next()` callback is returned.
//   if (!subsequentMiddleware) return context.next;

//   return (...parameters) => {
//     // Run the default Vue Router `next()` callback first.
//     context.next(...parameters);
//     // Then run the subsequent Middleware with a new
//     // `nextMiddleware()` callback.
//     const nextMiddleware = nextFactory(context, middleware, index + 1);
//     subsequentMiddleware({ ...context, next: nextMiddleware });
//   };
// }

// router.beforeEach((to, from, next) => {
//   if (to.meta.middleware) {
//     const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];

//     const context = {
//       from,
//       next,
//       router,
//       to,
//     };
//     const nextMiddleware = nextFactory(context, middleware, 1);

//     return middleware[0]({ ...context, next: nextMiddleware });
//   }

//   return next();
// });

export default router;
