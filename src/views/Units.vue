<template>
  <div class="units">
    <top-bar />
    <div class="units-container">
      <unit
        v-for="(unit, index) in units"
        :key="index"
        :name="unit.name"
        :description="unit.description"
        :id="unit.id"
        :rating="unit.rating"
        :region="unit.region"
        :pictures="unit.pictures"
        :price="unit.price"
        :cancellation="unit.cancellation"
      />
    </div>
    <div class="loading-text" v-if="loading">Loading....</div>
    <modal v-if="isModalActive" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GET_UNITS } from "@/store/StoreVariables";
import TopBar from "@/components/layout/TopBar.vue";
import Unit from "@/components/units/Unit.vue";
import Modal from "@/components/modals/Modal.vue";
export default {
  name: "Units",
  data: () => {
    return {
      loading: false,
      page: 0,
    };
  },
  computed: {
    ...mapState({
      units: (state) => state.units.units,
      isModalActive: (state) => state.modals.isModalActive,
    }),
  },
  components: {
    TopBar,
    Unit,
    Modal,
  },
  mounted() {
    this.getUnits();
    this.checkBottom();
  },
  methods: {
    getUnits() {
      this.loading = true;
      this.$store
        .dispatch(`units/${GET_UNITS}`, { page: ++this.page, q: "" })
        .then(() => {
          this.loading = false;
        });
    },
    checkBottom() {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
        ) {
          this.getUnits();
        }
      });
    },
  },
};
</script>

<style lang="scss">
.units {
  &-container {
    display: grid;
    align-items: center;
    row-gap: 20px;
    padding: 5%;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .loading-text {
    padding: 5px;
    text-align: center;
  }
}
</style>
