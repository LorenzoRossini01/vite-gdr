<script>
export default {
  data() {
    return {
      title: "GDR",
      n_character: "",
    };
  },

  props: {
    characters: Object,
  },
};
</script>

<template>
  <div class="row row-cols-3 g-3">
    <div class="col" v-for="character in characters">
      <div class="card h-100">
        <img :src="character.type.Image" class="card-img-top" alt="..." />
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
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
