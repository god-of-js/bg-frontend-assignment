<template>
  <div class="custom-carousel">
    <img
      :src="require(`../../assets/images/house-${presentImg}.jpg`)"
      :alt="name + presentImg"
    />
    <carousel-indicator />
  </div>
</template>

<script>
import CarouselIndicator from "./custom-carousel/CarouselIndicator";
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
      this.currentIndex++;
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
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
