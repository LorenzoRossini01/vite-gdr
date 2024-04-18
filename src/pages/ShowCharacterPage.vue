<script>
import axios from "axios";
import { api, store } from "../store";
import CharacterCardList from "../components/CharacterCardList.vue";

export default {
  data() {
    return {
      store,
      title: "Combatti",
      characters: null,
      character: null,
      userAtk: "",
      cpuDef: "",
      // cpuIndex: null,
      loaded: false,
      showRes: false,
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

    cpuIndex() {
      return Math.floor(Math.random() * this.characters.length) + 1;
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
      this.loaded = true;
    },
    cpuGen() {
      if (this.loaded) {
        setTimeout(() => {
          // this.cpuIndex =

          this.userAtk = this.character.attack;
          this.cpuDef = this.characters[this.cpuIndex].defense;
        }, 1500);
      }
    },
    play() {
      if (this.character.attack > this.characters[this.cpuIndex].defense) {
        this.result = "Hai vinto!";
      } else if (
        this.character.attack < this.characters[this.cpuIndex].defense
      ) {
        this.result = "Hai perso!";
      } else {
        this.result = "Pareggio!";
      }
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
  <h1 class="title">{{ title }}</h1>
  <button class="btn btn-primary w-100 mb-3" @click="play()">FIGHT!</button>
  <div class="container fight-container mb-3">
    <div class="result" v-if="showRes">
      <h2>{{ this.result }}</h2>
    </div>
    <div class="fight-vs" v-if="!showRes">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png"
        alt=""
      />
    </div>
    <div class="player-char">
      <img :src="character.image" class="" alt="..." />
      <div class="name">
        <h3>{{ character.name }}</h3>
      </div>
    </div>
    <div class="cpu-char">
      <img :src="characters[cpuIndex].image" class="" alt="..." />
      <div class="name">
        <h3>{{ characters[cpuIndex].name }}</h3>
      </div>
    </div>
  </div>
  <div class="container stats-container">
    <div class="row row-cols-2 g-2">
      <!-- USER CARD -->
      <div class="col">
        <h2 class="text-center">Player stats</h2>
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
        <h2 class="text-center">Cpu stats</h2>

        <div class="card h-100">
          <img
            :src="characters[cpuIndex].image"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">{{ characters[cpuIndex].name }}</h5>
            <p class="card-text">
              {{ characters[cpuIndex].description }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Attacco: </strong>{{ characters[cpuIndex].attack }}
            </li>
            <li class="list-group-item">
              <strong>Difesa: </strong>{{ characters[cpuIndex].defense }}
            </li>
            <li class="list-group-item">
              <strong>Velocità: </strong>{{ characters[cpuIndex].speed }}
            </li>
            <li class="list-group-item">
              <strong>Vita: </strong>{{ characters[cpuIndex].life }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";

.title {
  text-align: center;
  font-family: fantasy;
}

.fight-container {
  position: relative;
  background: rgb(0, 185, 81);
  background: linear-gradient(
    0deg,
    rgba(0, 185, 81, 1) 0%,
    rgb(0, 217, 94) 29%,
    rgba(0, 0, 0, 1) 29%,
    rgba(0, 0, 0, 1) 30%,
    rgba(49, 204, 255, 1) 30%,
    rgb(41, 176, 220) 100%
  );
  border-radius: 20px;
  border: 3px solid black;
  padding: 1rem;
  width: 80%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  overflow: hidden;
  .result {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    width: calc(100% - 2rem);
    height: 6rem;
    background-color: white;
    border: 3px solid black;
    border-radius: 10px;
    color: black;

    h2 {
      font-family: fantasy;
      font-size: 4rem;
    }
  }

  .fight-vs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
  }
  .player-char img {
    transform: scaleX(-1);
    height: 100%;
  }

  .cpu-char img {
    height: 100%;
  }

  .player-char,
  .cpu-char {
    position: relative;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .player-char .name,
  .cpu-char .name {
    text-align: center;
    background-color: white;
    width: 80%;
    height: 3rem;
    border-radius: 1rem;
    position: absolute;
    bottom: 0px;
    border: 3px solid black;
    color: black;
  }
}
.stats-container {
  margin-bottom: 10rem;
}
</style>
