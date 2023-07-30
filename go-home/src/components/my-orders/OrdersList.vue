<template>
  <ul class="orders-list">
    <p v-if="!items.length">No orders</p>
    <template v-else>
      <OrdersItem
        v-for="order in items"
        :order="order.apartment"
        :key="order.id"
      />
    </template>
  </ul>
</template>

<script>
import OrdersItem from "./OrdersItem.vue";
export default {
  name: "OrderList",
  components: {
    OrdersItem,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
</style>
