<template>
  <div class="unit">
    <custom-carousel :pictures="pictures" :name="name + ', ' + region" />
    <div class="info-content" @click="viewUnit">
      <h4>{{ name + "-" + region }}</h4>
      <p>{{ description }}</p>
      <p><b>Cancellation Policy: </b>{{ cancellation }}</p>
      <span>&#36;{{ price }}</span>
      <ratings :rating="rating" />
    </div>
  </div>
</template>

<script>
import CustomCarousel from "../custom-components/CustomCarousel";
import Ratings from "./Ratings";
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
      dummyPictures: ["one", "two", "three", "four"],
    };
  },
  components: {
    CustomCarousel,
    Ratings,
  },
  methods: {
    viewUnit() {
      this.$router.push("/units/" + this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.unit {
  width: 100%;
  height: 400px;
  margin: 0px 5px;
  cursor: pointer;
  .info-content {
    padding: 5px;
    h4 {
      margin: 0;
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 0.8em;
    }
  }
}
</style>
