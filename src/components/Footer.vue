<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal layout justify-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        <v-col class="shrink">
          <v-img
            src="../assets/footer.jpg"
            max-width="100%"
            class="img"
          ></v-img>
        </v-col>
        {{ new Date().getFullYear() }} — <strong>Homon</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiFacebook } from "@mdi/js";
export default {
  data() {
    return {
      icons: [mdiFacebook],
    };
  },
};
</script>

<style>
</style>