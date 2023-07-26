<template>
  <div class="card__container">
    <img :src="cardSrc" :alt="cardAlt" class="card__image" />
    <p class="card__description">{{ cardDescription }}</p>
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
    description: {
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
    cardDescription() {
      return this.description
        ? this.description
        : "There was an error, please reload the page";
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
  transition: transform 500ms;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.card__container:hover {
  transform: translateY(1rem);
}

.card__image {
  width: 12rem;
  height: 12rem;
  object-fit: cover;
}

@media (min-width: 600px) {
  .card__image {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
  }
}

.card__description {
  font-size: small;
}
</style>
