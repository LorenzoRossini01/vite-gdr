<script>
export default {
  data() {
    return {
      title: "GDR",
      n_character: "",
    };
  },

  props: {
    character: Object,
  },

  methods: {},
};
</script>

<template>
  <div class="card h-100">
    <router-link :to="{ name: 'character.show', params: { id: character.id } }">
      <img :src="character.image" class="card-img-top" alt="..." />
    </router-link>

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
</template>

<style lang="scss" scoped></style>
