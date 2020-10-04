  
<template>
  <v-container>
    <v-row>
      <v-col
        lg="4"
        v-for="(apartment, index) in apartments"
        :key="apartment._id"
        :index="index"
        :item="apartment"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title> {{ apartment.code }} </v-card-title>
          <v-card-subtitle align="start">{{
            `$${apartment.price}/Month`
          }}</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="snackbar = true"> Rent </v-btn>
            <v-snackbar v-model="snackbar">
              Please contact: {{ apartment.contact }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Got it
                </v-btn>
              </template>
            </v-snackbar>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on"> View Detail </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Details of Apartment
                </v-card-title>

                <v-card-text align="start">
                  <strong>Price:</strong> ${{ apartment.price }}/Month<br />
                  <strong>Location:</strong> {{ apartment.location }} <br />
                  <strong>Address:</strong> {{ apartment.address }} <br />
                  <strong>Detail:</strong> {{ apartment.detail }} <br />
                  <strong>Contact:</strong> {{ apartment.contact }} <br />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Service from "../Service";
const data = new Service();
export default {
  data() {
    return {
      apartments: [],
      error: "",
      snackbar: false,
    };
  },
  created() {
    data.getApartments().then((res) => {
      this.apartments = res.data;
    });
  },
};
</script>
<style scoped>
</style>