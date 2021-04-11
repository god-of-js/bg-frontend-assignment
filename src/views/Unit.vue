<template>
  <div class="unit">
    <article>
      <router-link to="/units">
        <custom-button
          class="mdi mdi-close close-btn"
          :setClass="'circle'"
        ></custom-button
      ></router-link>
      <custom-carousel
        :pictures="unit.pictures"
        :name="unit.name + ', ' + unit.region"
        :setClass="'transparent-border '"
        v-if="unit.pictures"
      />
      <div class="content-container">
        <header>
          <h4>{{ unit.name + "-" + unit.region }}</h4>
          <span class="price">{{ unit.price }} BTC</span>
        </header>
        <ratings :rating="unit.rating" class="ratings" />
        <p>Description: <span v-html="unit.description"></span></p>
        <span class="amenities"
          >Amenities:
          <span v-for="(amenity, index) in unit.amenities" :key="index">{{
            amenity + ", "
          }}</span></span
        >
        <div class="availability-container">
          <span
            class="availability"
            v-for="availability in unit.availability"
            :key="availability"
            v-text="availability"
          />
        </div>
        <custom-button class="book-btn" @click.native="bookUnit"
          >Book
        </custom-button>
      </div>
    </article>
  </div>
</template>

<script>
import CustomCarousel from "../components/custom-components/CustomCarousel.vue";
import CustomButton from "../components/custom-components/CustomButton.vue";
import Ratings from "@/components/units/Ratings.vue";
export default {
  name: "Unit",
  computed: {
    unit() {
      return this.$store.state.units.unit;
    },
  },
  components: {
    CustomCarousel,
    CustomButton,
    Ratings,
  },
  mounted() {
    this.$store.dispatch("units/getUnit", { id: this.$route.params.id });
  },
  methods: {
    bookUnit() {
      this.$store.commit("modals/setActiveModal", {
        isModalActive: true,
        activeModal: "BookUnit",
        commonData: {
          unitData: this.unit,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.unit {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $modal-color;
  article {
    height: 100%;
    width: 35%;
    background: $white;
    float: right;
    overflow: auto;
    .btn {
      margin: 5px;
    }
    .content-container {
      padding: 15px;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      padding: 0px;
      margin: 0px;
    }
  }
  p,
  .amenities {
    font-size: 0.9em;
  }
  .availability-container {
    padding-top: 15px;
    display: flex;
    flex-wrap: wrap;
    .availability {
      padding: 3px 23px;
      border-radius: 7px;
      font-size: 0.9em;
      background: $grey;
      border: 1px solid $black;
      color: $white;
      margin: 5px;
    }
  }
  .book-btn {
    float: right;
  }
}
::v-deep {
  .book-btn {
    &.btn {
      width: 60%;
      margin: auto;
    }
  }
  .close-btn {
    &.btn {
      position: fixed;
      z-index: 5;
      right: 0;
    }
  }
}
</style>
