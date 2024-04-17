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

  computed: {
    apiEndpoint() {
      return api.baseUrl + `character`;
    },
  },

  methods: {
    fetchCharacters(endpoint = this.apiEndpoint) {
      axios.get(endpoint).then((response) => {
        console.log(response.data);
        store.characters = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <div class="row">
      <input type="number" name="" v-model="n_character" class="form-control" />
      <div class="btn btn-primary mt-2" @click="fetchCharacters()">
        Genera personaggi
      </div>
      <CharacterCardList :characters="store.characters"></CharacterCardList>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
