<template>
  <div class="units">
    <top-nav />
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
    <modal />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "@/components/layout/TopNav.vue";
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
    units() {
      return this.$store.state.units.units;
    },
  },
  components: {
    TopNav,
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
        .dispatch("units/getUnits", { page: ++this.page, q: "" })
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
