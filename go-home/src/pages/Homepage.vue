<template>
  <main class="homepage">
    <SectionSpacer>
      <Container>
        <ApartmentFilterForm class="apartments-filter" @submit="filter" />
      </Container>
      <p v-if="!filterApartments.length" class="text-not-found">Not found</p>
      <ApartmentsList v-else :items="filterApartments" />
    </SectionSpacer>
  </main>
</template>

<script>
import ApartmentsList from "../components/appartment/ApartmentsList";
import ApartmentFilterForm from "../components/appartment/ApartmentFilterForm";
import Container from "../components/shared/Container.vue";
import SectionSpacer from "../components/shared/SectionWithHeaderSpacer.vue";

import { getApartmentsList } from "../services/apartments.service";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentFilterForm,
    Container,
    SectionSpacer,
  },
  data() {
    return {
      apartments: [],
      text: "",
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filterApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },

  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    filter(value) {
      if (value.type) {
        return;
      }
      this.filters = value;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return this.apartments.filter((apartment) => {
        return apartment.price >= Number(this.filters.price);
      });
    },
  },
};
</script>

<style>
.text-not-found {
  text-align: center;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
