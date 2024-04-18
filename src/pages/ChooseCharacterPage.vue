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
        console.log(response.data);
        store.characters = response.data;
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
  <router-link :to="{ name: 'homepage' }" class="go-back">
    <img
      src="https://cdn-icons-png.flaticon.com/512/17/17699.png"
      class="img-fluid"
      alt=""
  /></router-link>
  <div class="row row-cols-4 my-3 g-3 justify-content-center">
    <div class="col" v-for="character in store.characters">
      <CharacterCardList :character="character"></CharacterCardList>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
.go-back {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 50px;
  height: 50px;
  img {
    filter: invert(1);
  }
}
</style>
