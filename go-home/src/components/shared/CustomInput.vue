<template>
  <div class="wrapper-input">
    <input
      v-bind="$attrs"
      @blur="blurHandler"
      @input="handleInput"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
      error: "",
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },
  watch: {
    value(value) {
      if (!this.isFirstInput) {
        this.validate(value);
      }
    },
  },
  mounted() {
    if (!this.form) {
      return;
    }
    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) {
      return;
    }
    this.form.unRegisterInput(this);
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },

    validate(value) {
      this.isValid = this.rules.every((rule) => {

        const { hasPassed, message } = rule(value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });
    },

    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit("input", this.isFirstInput);
    },

    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }
      this.isFirstInput = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables.scss";
.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
