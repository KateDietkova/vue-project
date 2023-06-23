<template>
  <div>
    <h1>{{ title }}</h1>
    <ButtonOutlined @click="increment">Click me</ButtonOutlined>

  </div>
</template>

<script>
 import ButtonOutlined from "./components/Button.vue";

export default {
  name: "App",
  components: {
     ButtonOutlined
  },
  data() {
    return {
      amountOfClicks: 1,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },

  methods: {
    increment() {
      this.amountOfClicks++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
