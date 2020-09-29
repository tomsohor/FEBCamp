<template>
<v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal layout justify-center">
        <strong class="subheading">Get connected with us on social networks: </strong>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Homon</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiFacebook } from '@mdi/js';
export default {
    data(){
        return{
            icons: [mdiFacebook]
        }
    }
}
</script>

<style>

</style>