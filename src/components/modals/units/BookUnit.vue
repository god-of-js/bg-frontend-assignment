<template>
  <div>
    <custom-carousel
      :pictures="unitData.pictures"
      :name="unitData.name + ', ' + unitData.region"
      :setClass="'transparent-border '"
    />
    <header>
      <h4>{{ unitData.name + "-" + unitData.region }}</h4>
      <small class="price">{{ unitData.price }} BTC</small>
    </header>
    <form @submit.prevent="bookUnit">
      <custom-select
        :placeholder="'Select Year of booking'"
        :options="unitData.availability"
        :input.sync="year"
      />
      <div class="action-container">
        <custom-button
          class="btn"
          :inActive="!year"
          :required="true"
          :loading="loading"
          >Book Unit</custom-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import CustomCarousel from "../../custom-components/CustomCarousel";
import CustomSelect from "../../custom-components/CustomSelect";
import CustomButton from "../../custom-components/CustomButton";
export default {
  name: "BookUnit",
  components: {
    CustomCarousel,
    CustomSelect,
    CustomButton,
  },
  data: () => {
    return {
      year: null,
      loading: false,
    };
  },
  computed: {
    unitData() {
      return this.$store.state.modals.commonData.unitData;
    },
  },
  methods: {
    bookUnit() {
      this.loading = true;
      const data = {
        unitId: this.unitData.id,
        year: Number(this.year),
      };
      this.$store.dispatch("units/bookUnit", data).finally(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  margin-bottom: 5px;
}
.btn {
  margin-top: 15px;
}
.action-container {
  display: flex;
  justify-content: center;
}
</style>
