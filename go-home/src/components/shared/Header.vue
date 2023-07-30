<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <LogoComponent />
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../shared/Container.vue";
import LogoComponent from "../shared/LogoComponent.vue";
import AuthActions from "../header/AuthActions.vue";
import AccountActions from "../header/AccountActions.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  components: {
    Container,
    LogoComponent,
    AuthActions,
    AccountActions,
  },

  computed: {
    ...mapGetters(['isLoggedIn'])
  },

};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $secondary-color;
  padding: 16px 0;
  z-index: 2;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
