<template>
  <div class="home">
    <div class="banner">
      <v-parallax src="../assets/central-market.jpg" height="500"
        ><v-card-text align="start" class="bannertext"
          >Over 2800 apartment available From a normal apartment to a high class
          level of apartment for rent from all the area in Phnom Penh.Over 2800
          apartment available From a normal apartment to a high class level
        </v-card-text></v-parallax
      >
    </div>
<<<<<<< HEAD
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
=======
    <v-container class="apartment">
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <v-img src="../assets/room.jpg" max-width="500"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">Apartments</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <v-container class="rental">
      <v-card tile="">
        <v-row align="start">
          <v-col>
            <v-card-title class="card-title">Rental</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            > </v-col
          ><v-col class="shrink">
            <v-img src="../assets/room.jpg" max-width="500"></v-img>
          </v-col>
        </v-row>
      </v-card>
>>>>>>> 467d7148c1ca44db9fa28d0d0e7df8aa7a3d1733
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
};
</script>
<style scoped>
.card-title {
  font-size: 50px;
}
.card-text {
  font-size: 25px;
}
.apt1 {
  margin: 30px 0;
}
.bannertext {
  width: 100%;
  background-color: #55617e;
  font-size: 30px;
  line-height: 50px;
}
.card-text {
  line-height: 30px;
}
</style>
