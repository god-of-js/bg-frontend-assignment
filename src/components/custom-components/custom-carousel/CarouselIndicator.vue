<template>
  <div class="carousel-indicator">
    <button class="mdi mdi-chevron-left" @click="$emit('prevImage')"></button>
    <ul>
      <li
        v-for="num in arrLength"
        :key="num"
        :class="currentIndex + 1 === num ? 'active' : 'inactive'"
      ></li>
    </ul>
    <button class="mdi mdi-chevron-right" @click="$emit('nextImage')"></button>
  </div>
</template>

<script>
export default {
  name: "CarouselIndicator",
  props: {
    arrLength: Number,
    currentIndex: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.carousel-indicator {
  display: flex;
  align-items: center;
  width: fit-content;
  float: right;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  border-radius: 25px;
  background-color: rgba(33, 33, 33, 0.2);
  ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    li {
      list-style: none;
      background: $white;
      border-radius: 50%;
      margin: 0px 3px;
      &.inactive {
        height: 6px;
        width: 6px;
      }
      &.active {
        height: 9px;
        width: 9px;
      }
    }
  }
  button {
    border-radius: 50%;
    width: fit-content;
    background: transparent;
    border: transparent;
    color: $white;
    font-size: 1em;
    outline: none;
    cursor: pointer;
  }
}
</style>
