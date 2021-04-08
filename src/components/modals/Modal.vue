<template>
  <div class="modal">
    <modal-wrap>
      <div class="modal-card">
        <!-- <custom-button></custom-button> -->
      </div>
    </modal-wrap>
  </div>
</template>

<script>
import ModalWrap from "./ModalWrap";
export default {
  name: "Modal",
  components: {
    ModalWrap,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.modal-card {
  width: 30%;
  padding: 25px;
  border-radius: 5px;
  background: $white;
  margin: auto;
}
</style>
