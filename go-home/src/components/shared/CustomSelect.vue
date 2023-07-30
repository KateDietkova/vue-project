<template>
  <select v-bind="$attrs" @change="handleSelect" class="custom-select">
    <option
      v-for="item in formatedItems"
      :value="item.value"
      :key="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
  methods: {
    handleSelect(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables.scss";

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>
