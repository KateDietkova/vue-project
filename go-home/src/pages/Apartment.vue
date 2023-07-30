<template>
  <main class="apartment-page">
    <SectionSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews :reviews="reviews" />
          </div>
        </div>
      </Container>
    </SectionSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentsMainInfo from "../components/appartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/appartment/ApartmentsOwner.vue";
import Reviews from "../components/reviews";
import reviewsList from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartments.service";
import SectionSpacer from "../components/shared/SectionWithHeaderSpacer.vue";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
    SectionSpacer,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviews() {
      return reviewsList;
    },
  },

  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);

      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
