<script>
import axios from "axios";
import { api, store } from "./store";
import CharacterCardList from "./components/CharacterCardList.vue";

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
  },
};
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
