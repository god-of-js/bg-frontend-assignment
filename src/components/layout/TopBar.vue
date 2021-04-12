<template>
  <div class="top-bar">
    <div>
      <b><span>Blueground on </span> <span class="circle">Mars</span></b>
    </div>
    <div class="profile-container">
      <img :src="user.picture" :alt="user.name" width="40" height="40" />
      <span>{{ user.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TopBar",
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.top-bar {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  b {
    display: flex;
    align-items: center;
    font-size: 1em;
  }
  .circle {
    background: $white;
    color: $black;
    border: 1px solid $black;
    width: 50px;
    height: 50px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .profile-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $black;
    font-weight: bold;
    img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
