<template>
  <div class="custom-carousel">
    <img :src="`../../assets/images/house-${name}`" :alt="name" />
    <carousel-indicator />
  </div>
</template>

<script>
import CarouselIndicator from "./CarouselIndicator";
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
  components: {
    CarouselIndicator,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.custom-carousel {
  padding: 5px;
  border: 1px solid $border-color;
  height: 55%;
  border-radius: 5px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
