<template>
  <div class="card__container">
    <img :src="cardSrc" :alt="cardAlt" class="card__image" />
    <div class="card__name-date">
      <p class="card__name">{{ cardCameraName }}</p>
      <p class="card__description">{{ cardEarthDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    earthDate: {
      type: String,
      default: "",
    },
    cameraName: {
      type: String,
      default: "",
    },
  },
  computed: {
    cardSrc() {
      return this.src ? this.src : require("../assets/error.jpg");
    },
    cardAlt() {
      return this.alt ? this.alt : "failed to load ressource";
    },
    cardCameraName() {
      return this.cameraName ? this.cameraName : "Name not available";
    },
    cardEarthDate() {
      return this.earthDate ? this.earthDate : "No date available";
    },
  },
};
</script>

<style>
.card__container {
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 0.1rem solid black;
  max-width: fit-content;
  transition: box-shadow 500ms;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.card__container:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.card__image {
  width: 12rem;
  height: 12rem;
  object-fit: cover;
}

@media (min-width: 750px) {
  .card__image {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
  }
}

.card__description {
  font-size: x-small;
}

.card__name {
  font-weight: 600;
  font-size: x-small;
}

.card__name-date {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
</style>
