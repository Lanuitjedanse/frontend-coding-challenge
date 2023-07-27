const apiKey = process.env.VUE_APP_API_KEY;

const images = {
  async getImages(pageNumber = 1, roverName = "curiosity", cameras = "all") {
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&page=${pageNumber}&cameras=${cameras}&api_key=${apiKey}`
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Curiosity manifest:", error);
      throw error;
    }
  },
};

export default images;
