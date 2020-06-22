<template>
  <div class="container--small">
    <!-- tab -->
    <ul class="tab">
      <li class="tab__item" :class="{'tab__item--active': tab === 1 }" @click="tab = 1">Login</li>
      <li class="tab__item" :class="{'tab__item--active': tab === 2 }" @click="tab = 2">Register</li>
    </ul>
    <!-- /tab -->

    <!-- login form -->
    <div class="panel" v-show="tab === 1">
      <form class="form" @submit.prevent="login">
        <!-- email -->
        <label for="login-email">Email</label>
        <input type="text" class="form__item" id="login-email" v-model="loginForm.email" />
        <!-- /email -->

        <!-- password -->
        <label for="login-password">Password</label>
        <input type="password" class="form__item" id="login-password" v-model="loginForm.password" />
        <!-- /password -->

        <!-- submit -->
        <div class="form__button">
          <button type="submit" class="button button--inverse">login</button>
        </div>
        <!-- /submit -->
      </form>
    </div>
    <!-- /login form -->

    <!-- register form -->
    <div class="panel" v-show="tab === 2">
      <form class="form" @submit.prevent="register">
        <!-- username -->
        <label for="username">Name</label>
        <input type="text" class="form__item" id="username" v-model="registerForm.name" />
        <!-- /username -->

        <!-- email -->
        <label for="email">Email</label>
        <input type="text" class="form__item" id="email" v-model="registerForm.email" />
        <!-- /email -->

        <!-- password -->
        <label for="password">Password</label>
        <input type="password" class="form__item" id="password" v-model="registerForm.password" />
        <!-- /password -->

        <!-- password confirm -->
        <label for="password-confirmation">Password(confirm)</label>
        <input
          type="password"
          class="form__item"
          id="password-confirmation"
          v-model="registerForm.password_confirmation"
        />
        <!-- /password confirm -->

        <!-- submit -->
        <div class="form__button">
          <button type="submit" class="button button--inverse">register</button>
        </div>
        <!-- /submit -->
      </form>
    </div>
    <!-- /register form -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      loginForm: {
        email: "",
        password: ""
      },
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    login() {
      console.log(this.loginForm);
    },
    register() {
      console.log(this.registerForm);
    }
  }
};
</script>