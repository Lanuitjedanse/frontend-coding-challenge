<template>
  <form class="sidebar__form">
    <label for="type-select">Choose a photo type:</label>

    <select v-model="type" name="types" id="type-select">
      <option value="curiosity">Curiosity</option>
      <option value="opportunity">Opportunity</option>
      <option value="spirit">Spirit</option>
    </select>

    <button @click="onConfirm">Confirm</button>
  </form>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      type: "curiosity",
    };
  },
  methods: {
    onConfirm(event) {
      console.log("this.type", this.type);
      event.preventDefault();
      this.$emit("onConfirm", this.type);
    },
  },
};
</script>

<style>
.sidebar__form {
  padding: 1rem;
  gap: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  background-color: #0b3d91;
}
</style>
