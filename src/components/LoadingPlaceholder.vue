<template>
  <div class="loading-placeholder__container">
    <img :src="src" alt="spinner" class="loading-placeholder__spin" />
    <span>Loading images...</span>
  </div>
</template>

<script>
import spinner from "../assets/icons/spinner-solid.svg";

export default {
  name: "LoadingPlaceholder",
  data() {
    return {
      src: spinner,
    };
  },
};
</script>

<style>
.loading-placeholder__container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #add8e6;
  font-size: small;
  color: #0b3d91;
  min-width: fit-content;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.loading-placeholder__spin {
  width: 2rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
