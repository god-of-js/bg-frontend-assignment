<template>
  <div class="unit">
    <custom-carousel :pictures="pictures" :name="name + ', ' + region" />
    <router-link :to="'/units/' + id" class="link">
      <div class="info-content">
        <h4>{{ name + "-" + region }}</h4>
        <p>{{ description }}</p>
        <p><b>Cancellation Policy: </b>{{ cancellation }}</p>
        <span>{{ price }} BTC</span>
        <ratings :rating="rating" />
      </div>
    </router-link>
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
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 0.8em;
    }
  }
  .link {
    text-decoration: none;
    color: $black;
  }
}
</style>
