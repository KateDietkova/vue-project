<template>
  <button :type="type" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonOutlined",
  props: {
    type: {
      type: String,
      default: "button",
      },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background-color: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
}
</style>
