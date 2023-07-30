<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect
      :items="cities"
      class="form__select"
      v-model="city"
      @change="handleSelectForm"
    />
    <CustomInput
      v-model="price"
      placeholder="Price, from"
      @input="handleChangeInput"
      :value="valueInput"
      errorMessage="This field shouldn't empty"
      :rules="rules"
    />
    <SubmitButton class="form__submit" type="submit">Find house</SubmitButton>
  </form>
</template>

<script>
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import SubmitButton from "../../components/Button.vue";
import { isRequired, charLimit } from "../../utils/validationRules.js";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },

  data() {
    return {
      price: "",
      city: "",
      valueInput: "",
    };
  },

  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
      ];
    },
  },

  methods: {
    handleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },

    handleChangeInput(event) {
      this.price = event.target?.value;
      this.valueInput = event.target?.value;
    },

    handleSelectForm(value) {
      this.city = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
