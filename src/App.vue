<script>
import axios from "axios";
import { api, store } from "./store";
// import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
      title: "GDR",
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<style></style>
