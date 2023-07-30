<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables.scss";
.footer {
  background-color: $secondary-color;
  height: 30px;
}
</style>
