<script>
import axios from "axios";
import { api, store } from "../store";
import CharacterCardList from "../components/CharacterCardList.vue";

export default {
  data() {
    return {
      store,
      title: "SELEZIONA UN PERSONAGGIO",
      n_character: "",
    };
  },

  components: {
    CharacterCardList,
  },

  computed: {
    apiEndpoint() {
      return api.baseUrl + `character`;
    },
  },

  methods: {
    fetchCharacters(endpoint = this.apiEndpoint) {
      axios.get(endpoint).then((response) => {
        // console.log(response.data);
        store.characters = response.data.data;
      });
    },
  },

  created() {
    this.fetchCharacters();
  },
};
</script>

<template>
  <h1 class="mt-4 title">{{ title }}</h1>
  <div class="row row-cols-3 my-3 g-3">
    <div class="col" v-for="character in store.characters">
      <CharacterCardList :character="character"></CharacterCardList>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
