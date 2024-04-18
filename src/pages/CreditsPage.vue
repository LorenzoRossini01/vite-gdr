<script>
import axios from "axios";
import { api, store } from "../store";

export default {};
</script>

<template>
  <div class="container credits-container">
    <div class="wrapper">
      <div class="card w-100">
        <div class="card-header">
          <h1>Crediti</h1>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nabil Moutahir</li>
          <li class="list-group-item">Nicola Pio Gallo</li>
          <li class="list-group-item">Pasquale Francesco Pio Simeone</li>
          <li class="list-group-item">Lorenzo Rossini</li>
          <li class="list-group-item">Nicola Teora</li>
        </ul>
      </div>
      <router-link :to="{ name: 'homepage' }" class="go-back">
        <img
          src="https://cdn-icons-png.flaticon.com/512/17/17699.png"
          class="img-fluid"
          alt=""
      /></router-link>
    </div>
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";

.credits-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .wrapper {
    width: 80%;
  }
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
}
</style>
