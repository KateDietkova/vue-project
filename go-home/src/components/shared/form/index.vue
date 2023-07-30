<template>
  <form v-bind="$attrs">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  provide() {
    return {
      form: this,
    };
  },

  data() {
    return {
      inputs: [],
    };
  },

  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unRegisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },

    validate() {
      this.inputs.reduce((isValid, input) => {
        const isInputValid = input.validate();
        return isValid && isInputValid;
      }, true);
    },

    reset() {
      this.inputs.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
