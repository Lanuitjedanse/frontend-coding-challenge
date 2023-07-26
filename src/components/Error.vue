<template>
  <div class="error__container">
    <img :src="icon" alt="error" class="error__image" />
    <p class="error__text">Oops, there was an error! Please try again later</p>
  </div>
</template>

<script>
import circleX from "../assets/icons/circle-xmark-solid.svg";
export default {
  name: "Error",
  data() {
    return {
      icon: circleX,
    };
  },
};
</script>

<style>
.error__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error__text {
  font-size: small;
}

.error__image {
  width: 5rem;
}

@media (min-width: 600px) {
  .error__image {
    width: 10rem;
  }

  .error__text {
    font-size: large;
  }
}
</style>
