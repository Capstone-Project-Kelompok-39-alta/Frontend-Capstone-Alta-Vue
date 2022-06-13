import Vue from "vue";
import VueRouter from "vue-router";
import ClientsView from "../views/ClientsView.vue";
import TransactionView from "../views/TransactionView.vue";
import HistoryEmailView from "../views/HistoryEmailView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import InvoiceView from "../views/InvoiceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    path: "/clients",
    name: "clients",
    component: ClientsView,
  },
  {
    path: "/invoice",
    name: "invoice",
    component: InvoiceView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
