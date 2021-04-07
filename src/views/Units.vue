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
  </div>
</template>

<script>
import TopNav from "@/components/layout/TopNav.vue";
import Unit from "@/components/units/Unit.vue";
export default {
  name: "Units",
  computed: {
    units() {
      return this.$store.state.units.units;
    },
  },
  components: {
    TopNav,
    Unit,
  },
  mounted() {
    this.$store.dispatch("units/getUnits");
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
}
</style>
