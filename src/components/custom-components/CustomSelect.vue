<template>
  <fieldset>
    <select
      name="select"
      id="select"
      :required="required"
      v-model="value"
      @change="$emit('update:input', value)"
    >
      <option :value="option" v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
    <label for="select" :class="checkSelectValue"> {{ placeholder }}</label>
  </fieldset>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    placeholder: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      value: "",
    };
  },
  computed: {
    checkSelectValue() {
      return this.value ? "active-select" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
fieldset {
  background: $white;
  border: transparent;
  border-bottom: 1px solid $black;
  font-size: 1.2em;
  position: relative;
  padding: 0%;
  margin-top: 25px;
  select {
    outline: none;
    border: transparent;
    width: 100%;
  }
  label {
    position: absolute;
    pointer-events: none;
    left: 0px;
    top: 0px;
    transition: 0.2s ease all;
    font-size: 0.7em;
    color: $grey;
    &.active-select {
      top: -8px;
      font-size: 0.6em;
    }
  }
}
</style>
