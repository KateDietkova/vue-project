<template>
  <main class="my-orders-page">
    <SectionSpacer>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Orders</MainTitle>
          <OrdersList :items="orders" />
        </section>
      </Container>
    </SectionSpacer>
  </main>
</template>

<script>
import SectionSpacer from "../components/shared/SectionWithHeaderSpacer.vue";
import Container from "../components/shared/Container.vue";
import MainTitle from "../components/shared/MainTitle.vue";
import OrdersList from "../components/my-orders/OrdersList.vue";
import { getOrders } from "../services/orders.service";
export default {
  name: "MyOrdersPage",
  components: { SectionSpacer, Container, MainTitle, OrdersList },

  data() {
    return {
      orders: [],
    };
  },

  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: "error",
        title: "Something went wrong",
        text: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 770px;
    margin: 0 auto 100px;
  }
}
</style>
