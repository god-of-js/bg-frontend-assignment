<template>
  <div class="sign-in">
    <article>
      <header>
        <b
          >Blueground on
          <div class="circle">Mars</div></b
        >
      </header>
      <form @submit.prevent="login">
        <custom-input :placeholder="'Colonist ID'" :input.sync="data.email" />
        <small>e.g. joe@2045.us, jane@2064.gr</small>
        <custom-input
          :placeholder="'Password'"
          :input.sync="data.password"
          :requiredInput="true"
          :type="'password'"
        />
        <custom-button :inActive="checkEmail" :loading="loading">
          Sign In</custom-button
        >
      </form>
    </article>
  </div>
</template>

<script>
import EmailValidation from "@/helpers/EmailValidation.js";
import CustomInput from "@/components/custom-components/CustomInput.vue";
import CustomButton from "@/components/custom-components/CustomButton.vue";
export default {
  data: () => {
    return {
      data: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  computed: {
    checkEmail() {
      return !EmailValidation.email.test(this.data.email);
    },
  },
  components: {
    CustomInput,
    CustomButton,
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("auth/login", this.data)
        .then(() => this.$router.push("/home"))
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.sign-in {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  article {
    width: 25%;
    padding: 30px;
    height: 30%;
    border: 1px solid $border-color;
    @include box-shadow();
    b {
      display: flex;
      align-items: center;
      font-size: 1em;
    }
    .circle {
      background: $black;
      color: $white;
      width: 50px;
      height: 50px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
  button {
    float: right;
    margin-top: 20px;
  }
  .example-email {
    text-align: left;
    font-size: 0.8em;
  }
}
</style>
