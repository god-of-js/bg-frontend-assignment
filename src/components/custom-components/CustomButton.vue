<template>
  <button
    :class="[inActive ? 'in-active-btn' : 'active', 'btn ' + setClass]"
    :disabled="inActive"
  >
    <slot v-if="!loading" />
    <span v-else>loading...</span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    inActive: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    setClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
button {
  outline: none;
  border: transparent;
  width: fit-content;
  padding: 10px;
  height: 46px;
  width: 80%;
  border-radius: 5px;
  font-size: 0.9em;
  &.in-active-btn {
    background: $border-color;
    color: $grey;
    cursor: not-allowed;
  }
  &.active {
    color: $white;
    background-color: $black;
    cursor: pointer;
  }
  &.circle {
    border-radius: 50%;
    padding: 4px 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
