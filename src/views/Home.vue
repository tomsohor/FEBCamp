<template>
  <div class="home">
    <div class="banner">
      <v-parallax src="../assets/central-market.jpg" height="500">
        <v-card-text align="center" class="bannertext">
          HAVING TROUBLE LOOKING FOR RENTAL ROOM IN <br/> <br/>
          <strong id="PP"> PNHOM PENH? </strong> <br/><br/>
          Don’t worry! With HOMON we bring all the rental room to your hand. <br/>
          <strong id="book"> Book your ROOM in just ONE CLICK! </strong>
        </v-card-text>
      </v-parallax>
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
    <v-container class="rental-room" >
        <v-card tile="" max-width="1000">
          <v-row>
            <v-col>
              <v-card-title class="card-title">Rental Room</v-card-title>
              <v-divider/>
              <v-card-text align="start" class="card-text">24000 normal rental room from the cheapest to the best whichavailable in all location and contact to owner with 1 click.
              </v-card-text>
            </v-col>
            <v-col class="shrink">
              <v-img src="../assets/room.jpg" max-width="400"></v-img>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {

  },
};
</script>
<style scoped>
#PP {
  font-size: 100px;
}
#book{
  font-size: 40px;
}
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
  background-color:rgba(25, 42, 86, 0.5);
  font-size: 30px;
  line-height: 50px;
}
.card-text {
  line-height: 30px;
}
</style>
