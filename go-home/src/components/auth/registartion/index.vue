<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="registration__form">
      <CustomInput
        placeholder="Name"
        v-model="formData.name"
        @input="handleChangeName"
        name="name"
        :rules="nameRules"
        :value="formData.name"
        class="registration__input"
      />
      <CustomInput
        placeholder="Email"
        v-model="formData.email"
        @input="handleChangeEmail"
        name="email"
        :rules="emailRules"
        :value="formData.email"
        class="registration__input"
      />
      <CustomInput
        type="password"
        v-model="formData.password"
        placeholder="Password"
        @input="handleChangePassword"
        name="password"
        :rules="passwordRules"
        :value="formData.password"
        class="registration__input"
      />

      <CustomInput
        type="password"
        v-model="formData.confirmPassword"
        @input="handleChangeConfirmPassword"
        placeholder="Confirm password"
        name="confirm-password"
        :rules="confirmPasswordRules"
        :value="formData.confirmPassword"
        class="registration__input"
      />
      <Button type="submit" class="registration__btn" :loading="loading"
        >Registration</Button
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form";
import CustomInput from "../../shared/CustomInput.vue";
import Button from "../../Button";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";
// import { registerUser } from "../../../services/auth.service";
export default {
  name: "RegistrationForm",
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },

    confirmPasswordRules() {
      return [
        (val) => ({
          hasPassed: val === this.formData.confirmPassword,
          message: "Passwords not match",
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const { name, email, password } = this.formData;
        // const { data } = await registerUser({ name, email, password });
        // const { user, token } = data;
        await this.$store.dispatch("register", { name, email, password });

        this.$router.push({ name: "homepage" });

        this.$refs.form.reset();
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        this.loading = false;
      }

    },
    formReset() {
      this.formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },

    handleChangeName(event) {
      if (event === true) {
        this.formData.name = "";
        return;
      }
      this.formData.name = event.target?.value;
    },

    handleChangeEmail(event) {
      if (event === true) {
        this.formData.email = "";
        return;
      }
      this.formData.email = event.target?.value;
    },

    handleChangePassword(event) {
      if (event === true) {
        this.formData.password = "";
        return;
      }
      this.formData.password = event.target?.value;
    },

    handleChangeConfirmPassword(event) {
      if (event === true) {
        this.formData.confirmPassword = "";
        return;
      }
      this.formData.confirmPassword = event.target?.value;
    },
  },

};
</script>

<style lang="scss" scoped>
.registration {
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
