<template>
  <v-footer padless>
    <v-img src="../assets/footer.jpg"></v-img>
    <v-card-text id="foot">{{ new Date().getFullYear() }} — <strong>Homon</strong></v-card-text>
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

<style scoped>
#foot{
  color: white;
  background-color: #666768;
}
</style>