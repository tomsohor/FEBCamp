<template>
  <div class="home">
    <v-container class="apartment">
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center">
          <v-col>
            <v-card-title class="card-title">Login</v-card-title>
            <v-divider />
            <form>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  hint="At least 8 characters"
                  value=""
                  class="input-group--focused"
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" class="sub">
                <p>
                  Create Account?
                  <router-link class="nav1" to="/signup">Sign Up </router-link>
                </p>

                <v-btn class="mr-8" @click="submit"> submit </v-btn>
              </v-col>
            </form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
};
</script>
<style scoped>
.card-title {
  font-size: 50px;
}
.card-text {
  font-size: 25px;
  line-height: 30px;
}
.home {
  margin-top: 40px;
}
.img {
  margin: 70px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
.apt1 {
  background-color: #c4c4c4;
  border-radius: 10px;
  padding: 30px;
}
.sub {
  display: flex;

  justify-content: space-between;
}
</style>
