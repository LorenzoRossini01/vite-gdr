<script>
import axios from "axios";
import { api, store } from "../store";
import CharacterCardList from "../components/CharacterCardList.vue";

export default {
  data() {
    return {
      store,
      title: "GDR",
      n_character: "",
      character: null,
    };
  },

  components: {
    CharacterCardList,
  },

  computed: {
    apiEndpoint() {
      return api.baseUrl + `character/${this.$route.params.id}`;
    },
  },

  methods: {
    fetchCharacter(endpoint = this.apiEndpoint) {
      axios.get(endpoint).then((response) => {
        console.log(response.data);
        store.characters = response.data.data;
      });
    },
  },

  created() {
    this.fetchCharacter();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="row">
    <CharacterCardList :character="character"></CharacterCardList>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
