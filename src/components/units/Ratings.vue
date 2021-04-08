<template>
  <div class="ratings">
    <span
      v-for="star in 5"
      :key="star"
      :class="[rating >= star ? 'mdi-star ' : 'mdi-star-outline', 'mdi icon']"
    ></span>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
