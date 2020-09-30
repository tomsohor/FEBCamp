<template>
  <div class="home">
    <div class="banner">
      <v-parallax src="../assets/central-market.jpg"  height="650"></v-parallax>
    </div>
    <v-container class="apartment" >
        <v-card tile="" max-width="1000">
          <v-row>
            <v-col class="shrink">
              <v-img src="../assets/room.jpg" max-width="400"></v-img>
            </v-col>
            <v-col>
              <v-card-title class="card-title">Apartments</v-card-title>
              <v-divider/>
              <v-card-text align="start" class="card-text">Over 2800 apartment available From a normal apartment to a high class level of apartment for rent from all the area in Phnom Penh.</v-card-text>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
    <v-container class="apartment" >
        <v-card tile="" max-width="1000">
          <v-row>
            <v-col class="shrink">
              <v-img src="../assets/room.jpg" max-width="400"></v-img>
            </v-col>
            <v-col>
              <v-card-title class="card-title">Apartments</v-card-title>
              <v-divider/>
              <v-card-text align="start" class="card-text">Over 2800 apartment available From a normal apartment to a high class level of apartment for rent from all the area in Phnom Penh.</v-card-text>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>
<style scoped>
.card-title{
  font-size: 50px;
}
.card-text{
  font-size: 25px;
}
</style>
