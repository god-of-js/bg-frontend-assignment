<template>
  <div class="custom-carousel">
    <transition name="slide" mode="out-in">
      <img :src="BASE_URL + presentImg" :alt="name" :key="presentImg"
    /></transition>
    <div class="indicator-container">
      <carousel-indicator
        class="indicator"
        @nextImage="nextImage"
        @prevImage="prev"
        :arrLength="pictures.length"
        :currentIndex="currentIndex"
      />
    </div>
  </div>
</template>

<script>
import CarouselIndicator from "./custom-carousel/CarouselIndicator";
import { BASE_URL } from "@/config/secrets";
export default {
  name: "CustomCarousel",
  props: {
    pictures: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      currentIndex: 0,
      BASE_URL,
    };
  },
  computed: {
    presentImg() {
      return this.pictures[this.currentIndex];
    },
  },
  methods: {
    prev() {
      if (this.currentIndex === 0) this.currentIndex = this.pictures.length;
      else this.currentIndex--;
    },
    nextImage() {
      if (this.currentIndex !== this.pictures.length - 1) this.currentIndex++;
      else this.currentIndex = 0;
    },
  },
  components: {
    CarouselIndicator,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.custom-carousel {
  padding: 10px;
  border: 1px solid $border-color;
  height: 55%;
  border-radius: 5px;
  position: relative;
  .indicator-container {
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
