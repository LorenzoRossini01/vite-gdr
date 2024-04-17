import { createRouter, createWebHistory } from "vue-router";

import ChooseCharacterPage from "./pages/ChooseCharacterPage.vue";
import ShowCharacterPage from "./pages/ShowCharacterPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "char-list",
      component: ChooseCharacterPage,
    },

    {
      path: "/character/:id",
      name: "character.show",
      component: ShowCharacterPage,
    },
  ],
});
export { router };
