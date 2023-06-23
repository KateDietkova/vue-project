<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
}
</script>

<style lang="scss" scoped></style>
