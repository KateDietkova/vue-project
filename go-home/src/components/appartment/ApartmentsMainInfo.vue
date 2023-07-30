<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>

    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <Button :loading="isLoading" @click="handleApartmentsBooking"
        >Book</Button
      >
    </div>
  </article>
</template>

<script>
import Rating from "../../components/StarRating.vue";
import Button from "../../components/Button.vue";
import { bookApartment } from "../../services/orders.service";
export default {
  name: "ApartmentsMainInfo",
  components: { Rating, Button },
  props: {
    apartment: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };

      try {
        this.isLoading = true;
        await bookApartment(body);

        this.$notify({
          type: "success",
          title: "Order has been added",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
    max-width: 600px;
  }

  &__photo {
    width: 730px;
    height: 410px;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
    max-width: 740px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
