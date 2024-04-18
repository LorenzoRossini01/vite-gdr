<script>
import axios from "axios";
import { api, store } from "../store";

export default {};
</script>

<template>
  <div class="container home-container">
    <div class="wrapper">
      <h1 class="text-center">GDR FANTASY</h1>
      <div class="button-container d-flex justify-content-center">
        <router-link
          :to="{ name: 'creditspage' }"
          class="btn btn-secondary mx-2"
          >Credits</router-link
        >
        <router-link :to="{ name: 'char-list' }" class="btn btn-primary mx-2"
          >Gioca</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
.home-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .wrapper {
    border-block: 1px solid white;
    padding-block: 3rem;
    width: 80%;
  }
}
</style>
