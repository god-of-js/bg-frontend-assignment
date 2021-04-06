<template>
  <fieldset :class="[err ? 'error' : '']">
    <input
      :type="type"
      name="input"
      id="input"
      placeholder="."
      :required="requiredInput"
      @input="$emit('update:input', $event.target.value)"
    />
    <label for="input" class="label"> {{ placeholder }}</label>
    <span class="error-msg"></span>
  </fieldset>
</template>

<script>
export default {
  name: "CustomInput",
  model: {
    prop: "value",
    event: "update",
  },
  props: {
    err: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    requiredInput: {
      type: Boolean,
      default: false,
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
  input {
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
    font-size: 0.9em;
    color: $grey;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: scale(0.9) translateY(-100%) translateX(-5px);
    font-size: 0.7em;
  }
  .error-msg {
    color: red;
  }
}
</style>
