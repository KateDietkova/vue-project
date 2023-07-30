<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <HeaderComponent />
      <router-view></router-view>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/shared/Footer";
import HeaderComponent from "./components/shared/Header";
import Notifications from "./components/notifications";
export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent,
    Notifications,
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}

.text-not-found {
  text-align: center;
}
</style>
