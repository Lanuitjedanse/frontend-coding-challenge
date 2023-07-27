<template>
  <div ref="imagesContainer" class="grid__container">
    <Card
      v-for="image in images"
      :key="image.id"
      :src="image.img_src"
      :alt="image.camera.full_name"
      :earth-date="image.earth_date"
      :camera-name="image.camera.name"
    />
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import Card from "./Card";

export default {
  name: "Grid",
  components: { Card },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$refs.imagesContainer.addEventListener(
      "scroll",
      debounce(this.handleScroll, 1000)
    );
  },
  beforeUnmount() {
    this.$refs.imagesContainer.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const imagesContainer = this.$refs.imagesContainer;

      if (imagesContainer) {
        const isAtBottom =
          imagesContainer.scrollTop + imagesContainer.clientHeight ===
          imagesContainer.scrollHeight;

        if (isAtBottom) {
          this.$emit("getMoreImages");
        }
      }
    },
  },
};
</script>

<style>
.grid__container {
  display: grid;
  grid-row: 3 / 4;
  gap: 30px;
  grid-auto-flow: row;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  justify-content: center;
  justify-items: center;
  padding-top: 2rem;
  padding-bottom: 7rem;
  overflow-x: hidden;
}
</style>
