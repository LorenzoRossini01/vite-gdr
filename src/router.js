import { createRouter, createWebHistory } from "vue-router";

import ChooseCharacterPage from "./pages/ChooseCharacterPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "char-list",
      component: ChooseCharacterPage,
    },
  ],
});
export { router };
