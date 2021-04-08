<template>
  <div id="modalwrap">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
#modalwrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: $modal-color;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 55;
}
</style>
