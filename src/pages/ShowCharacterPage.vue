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
      characters: null,
      character: null,
      userAtk:"",
      cpuDef:"",
      cpuIndex: null,
      loaded: false,
      showRes:false,
      result: "",
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
        console.log("User Character " + response);
        this.character = response.data;
      });
      axios.get(api.baseUrl + `character`).then((response) => {
        console.log("Characters " + response.data);
        this.characters = response.data.data;
      });
      this.loaded= true;
    },
   cpuGen() {
    if (this.loaded) { setTimeout(() => {
      this.cpuIndex = Math.floor(Math.random() * this.characters.length) + 1;
      this.userAtk = this.character.attack;
      this.cpuDef = this.characters[this.cpuIndex].defense;
    }, 1500); };
   },
   play() {
      if (this.userAtk > this.cpuDef) {
        this.result = "Hai vinto!";
      } else if (this.userAtk < this.cpuDef) {
        this.result = "Hai perso!";
      } else {
        this.result = "Pareggio!";
      };
      this.showRes = true;
      return result;
    },
  },

  created() {
  this.fetchCharacter();
  this.cpuGen();

  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="row mb-4">
    <div class="text-center">
      <button class="btn btn-primary" @click="play()">FIGHT!</button>
      <h2>{{ this.result }}</h2>
    </div>
    <!-- USER CARD -->
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
<!-- CPU CARD -->
      <div class="col">

      <div class="card h-100">
        <img :src="characters[this.cpuIndex].image" class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title">{{ characters[this.cpuIndex].name }}</h5>
          <p class="card-text">
            {{ characters[this.cpuIndex].description }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Attacco: </strong>{{ characters[this.cpuIndex].attack }}
          </li>
          <li class="list-group-item">
            <strong>Difesa: </strong>{{ characters[this.cpuIndex].defense }}
          </li>
          <li class="list-group-item">
            <strong>Velocità: </strong>{{ characters[this.cpuIndex].speed }}
          </li>
          <li class="list-group-item">
            <strong>Vita: </strong>{{ characters[this.cpuIndex].life }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
