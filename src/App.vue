<template>
  <div id="app">
    <SideBar class="app__sidebar" @onConfirm="handleTypeChange" />
    <div class="app__photos-container">
      <img alt="Vue logo" src="./assets/logo.png" class="app__logo" />
      <Error v-if="error" />
      <Grid
        class="app__grid-container"
        ref="gridContainer"
        :images="nasaImages"
        :loading="loading"
        @getMoreImages="handleGetMoreImages"
      />
      <LoadingPlaceholder v-if="loading" class="app__loading-placeholder" />
      <p v-show="nasaImages.length === 0 && !error">
        There are no images available
      </p>
      <p v-show="isNoImageLength && nasaImages.length > 0">
        There are no more images to load
      </p>
    </div>
  </div>
</template>

<script>
import Grid from "./components/Grid";
import imagesService from "./services/images";
import LoadingPlaceholder from "./components/LoadingPlaceholder";
import Error from "./components/Error";
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: {
    Grid,
    LoadingPlaceholder,
    Error,
    SideBar,
  },
  data() {
    return {
      type: "curiosity",
      nasaImages: [],
      pageNumber: 1,
      loading: true,
      error: false,
      isNoImageLength: false,
    };
  },
  async mounted() {
    await this.getImagesData();
  },
  computed: {
    cameras() {
      if (this.type === "curiosity") {
        return ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];
      } else {
        return ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
      }
    },
  },
  methods: {
    async handleGetMoreImages() {
      this.loading = true;
      await this.getImagesData();
    },
    async getImagesData() {
      try {
        const data = await imagesService.getImages(
          this.pageNumber,
          this.type,
          this.cameras
        );
        this.isNoImageLength = data.photos.length === 0;

        this.error = false;
        this.pageNumber += 1;
        this.nasaImages.push(...data.photos);
        this.loading = false;
      } catch (error) {
        console.error("Error:", error);
        this.loading = false;
        this.error = true;
      }
    },
    async handleTypeChange($event) {
      if ($event !== this.type) {
        this.nasaImages = [];
        this.pageNumber = 1;
      }

      this.type = $event;
      await this.handleGetMoreImages();
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  overflow: hidden;
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.app__photos-container {
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: 3;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.app__sidebar {
  font-size: x-small;
  width: 7rem;
  height: 100%;
}

.app__logo {
  grid-row: 1;
  width: 15rem;
}

@media (min-width: 750px) {
  .app__sidebar {
    font-size: large;
    width: 20rem;
    height: 100%;
  }

  .app__logo {
    grid-row: 1;
    width: 20rem;
  }
}

.app__loading-placeholder {
  grid-row: 3;
  width: 2rem;
  margin-top: -4rem;
}

.app__grid-container {
  height: 100%;
  grid-row: 2;
}
</style>
