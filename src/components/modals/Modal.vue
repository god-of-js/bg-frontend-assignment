<template>
  <div class="modal">
    <modal-wrap>
      <div class="modal-card">
        <div class="btn-container">
          <custom-button :setClass="'circle'" @click.native="close"
            ><i class="mdi mdi-close"></i>
          </custom-button>
        </div>
        <component :is="activeModal" />
      </div>
    </modal-wrap>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ModalWrap from "./ModalWrap";
import CustomButton from "../custom-components/CustomButton";
import components from "./components";
export default {
  name: "Modal",
  data: () => {
    return {
      componentId: "",
    };
  },
  computed: {
    ...mapState({
      activeModal: (state) => state.modals.activeModal,
    }),
  },
  components: {
    ModalWrap,
    CustomButton,
    ...components,
  },
  methods: {
    close() {
      this.$store.commit("modals/setActiveModal", {});
    },
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
  .btn-container {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
