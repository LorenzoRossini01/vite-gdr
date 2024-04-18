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
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="img-container">
          <router-link
            :to="{ name: 'character.show', params: { id: character.id } }"
          >
            <img :src="character.image" class="img-fluid" alt="..." />
          </router-link>
        </div>
        <h5 class="title">{{ character.name }}</h5>
        <p class="text">{{ character.description }}</p>
      </div>

      <div class="flip-card-back">
        <div class="back-container p-3">
          <h5 class="title">{{ character.name }}</h5>
          <p class="text">{{ character.description }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Attacco: </strong>{{ character.attack }}
            </li>
            <li class="list-group-item">
              <strong>Difesa: </strong>{{ character.defence }}
            </li>
            <li class="list-group-item">
              <strong>Velocità: </strong>{{ character.speed }}
            </li>
            <li class="list-group-item">
              <strong>Vita: </strong>{{ character.life }}
            </li>
          </ul>

          <router-link
            :to="{ name: 'character.show', params: { id: character.id } }"
            class="btn btn-warning w-100 mt-2"
            >Seleziona</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  height: 400px;
  border-radius: 10px;
  // border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: start;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #312c8e;
  color: rgb(255, 255, 255);
  padding: 1rem;
  .img-container {
    height: 70%;
    text-align: center;
    background-color: white;
    // background-image: url("https://i.pinimg.com/564x/6b/6a/85/6b6a8579ba67c3a55cfcfe3e5d653063.jpg")
    img {
      height: 100%;
    }
  }
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
