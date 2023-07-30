<template>
  <ContainerWrapper>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :id="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </ContainerWrapper>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem.vue";
import ContainerWrapper from "../shared/Container.vue";

export default {
  name: "ApartmentsList",
  components: { ApartmentsItem, ContainerWrapper },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
