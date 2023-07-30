<template>
  <div v-if="isVisible">
    <h1 v-show="false">Directives</h1>
    <ul>
        <li v-for="fruit in fruits" :key="fruit"> {{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivesTest",
  data() {
    return {
      isVisible: true,
      fruits: ["kiwi", "banana", "apple"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
