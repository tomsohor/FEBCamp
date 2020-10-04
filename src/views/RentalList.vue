<template>
  <v-container>
    <v-row>
      <v-col lg="4"
          v-for="(roomm, index) in rooms"
          :key="roomm._id"
          :index="index"
          :item="roomm" >
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
          <v-card-title> {{roomm.code}} </v-card-title>
          <v-card-text align="start">
            <strong>Price:</strong>{{`$${roomm.price}/Month`}} <br>
            <strong>Location:</strong> {{roomm.location}}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="snackbar = true">
              Rent
            </v-btn>
            <v-snackbar v-model="snackbar">
              Please contact: {{roomm.contact}}
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                  Got it
                </v-btn>
              </template>
            </v-snackbar>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on">
                  View Detail
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Details of Room
                </v-card-title>

                <v-card-text align="start">
                  <strong>Price:</strong> ${{roomm.price}}/Month<br>
                  <strong>Location:</strong> {{roomm.location}} <br>
                  <strong>Address:</strong> {{roomm.address}} <br>
                  <strong>Detail:</strong> {{roomm.detail}} <br>
                  <strong>Contact:</strong> {{roomm.contact}} <br>
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
import roomService from '../roomService'
export default {
  data(){
    return{
      rooms: [],
      error: '',
      snackbar: false,
    }
  },
  async created(){
    try{
      this.rooms = await roomService.getRooms()
    }catch(error){
      this.error = error.message
    }
  }
  
}
</script>
<style scoped>

</style>