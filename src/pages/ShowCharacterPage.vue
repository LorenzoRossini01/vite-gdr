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
        this.character = response.data;
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
    <div class="col">
      <div class="card h-100">
        <img :src="character.image" class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title">{{ character.name }}</h5>
          <p class="card-text">
            {{ character.description }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Attacco: </strong>{{ character.attack }}
          </li>
          <li class="list-group-item">
            <strong>Difesa: </strong>{{ character.defense }}
          </li>
          <li class="list-group-item">
            <strong>Velocità: </strong>{{ character.speed }}
          </li>
          <li class="list-group-item">
            <strong>Vita: </strong>{{ character.life }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
