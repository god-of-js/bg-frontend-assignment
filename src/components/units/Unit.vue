<template>
  <div class="unit">
    <custom-carousel :pictures="pictures" :name="name + ', ' + region" />
    <div class="info-content">
      <h3>{{ name + "," + region }}</h3>
    </div>
  </div>
</template>

<script>
import CustomCarousel from "../custom-components/CustomCarousel";
export default {
  name: "Unit",
  props: {
    name: {
      type: String,
      required: true,
    },
    cancellation: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    pictures: {
      type: Array,
      required: true,
    },
    region: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  data: () => {
    return {
      dummyPictures: [""],
    };
  },
  components: {
    CustomCarousel,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.unit {
  width: 100%;
  height: 300px;
  margin: 0px 5px;
  .info-content {
    padding: 5px;
  }
}
</style>
