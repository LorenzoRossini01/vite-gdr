import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CreditsPage from "./pages/CreditsPage.vue";
import ChooseCharacterPage from "./pages/ChooseCharacterPage.vue";
import ShowCharacterPage from "./pages/ShowCharacterPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/credits",
      name: "creditspage",
      component: CreditsPage,
    },
    {
      path: "/characters",
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
