<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Log in</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        placeholder="Email"
        v-model="formData.email"
        @input="handleChangeEmail"
        name="email"
        :rules="emailRules"
        :value="formData.email"
        class="login__input"
      />
      <CustomInput
        type="password"
        v-model="formData.password"
        placeholder="Password"
        @input="handleChangePassword"
        name="password"
        :rules="passwordRules"
        :value="formData.password"
        class="login__input"
      />
      <Button type="submit" class="login__btn" :loading="loading"
        >Log in</Button
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../shared/form";
import CustomInput from "../shared/CustomInput.vue";
import Button from "../Button";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRules";
import AuthContainer from "../auth/AuthContainer.vue";
import MainTitle from "../shared/MainTitle.vue";
export default {
  name: "LoginForm",
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },

  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },

  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      //   const isFormValid = this.$refs.form.validate();
      //   if (isFormValid) {
      try {
        this.loading = true;
        await this.$store.dispatch("login", this.formData);
        this.$router.push({ name: "homepage" });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        this.loading = false;
      }

      //   }
    },

    handleChangeEmail(event) {
      this.formData.email = event.target?.value;
    },

    handleChangePassword(event) {
      this.formData.password = event.target?.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
