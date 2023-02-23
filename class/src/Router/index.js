import { createRouter, createWebHistory } from "vue-router";
import FirstComponent from "../components/FirstComponent.vue";
import SecondComponent from "../components/SecondComponent.vue";
import ThirdComponent from "../components/ThirdComponent.vue";

const routes = [
  { path: "/first", component: FirstComponent },
  { path: "/second/", component: SecondComponent },
  { path: "/second/:title", component: SecondComponent },
  { path: "/third", component: ThirdComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router }