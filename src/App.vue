<script>
import axios from "axios";
import { api, store } from "./store";
import CharacterCardList from "./components/CharacterCardList.vue";
import AppHeader from "./components/partials/AppHeader.vue";

export default {
  data() {
    return {
      store,
      title: "GDR",
      n_character: "",
    };
  },

  components: {
    CharacterCardList,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
