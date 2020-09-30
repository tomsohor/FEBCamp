<template>
  <div class="home">
    <div class="back">
      <v-btn><router-link to="/room">back</router-link><br /></v-btn>
    </div>
    <v-container class="apartment">
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center" class="row">
          <v-col class="shrink">
            <v-img src="../assets/room.jpg" class="img"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">Bed Room</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center" class="row">
          <v-col class="shrink">
            <v-img src="../assets/room.jpg" class="img"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">Bed Room</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center" class="row">
          <v-col class="shrink">
            <v-img src="../assets/room.jpg" class="img"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">Bed Room</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center" class="row">
          <v-col class="shrink">
            <v-img src="../assets/room.jpg" class="img"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">Bed Room</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center" class="row">
          <v-col class="shrink">
            <v-img src="../assets/room.jpg" class="img"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">Bed Room</v-card-title>
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
  line-height: 30px;
}
.home {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.img {
  margin: 50px;

  height: 400px;
  border-radius: 10px;
}
.apartment {
  background-color: #c4c4c4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 750px;
  overflow: auto;
}
.row {
  display: flex;
  flex-direction: column;
}
.back {
  position: relative;
  margin-bottom: 30px;
  width: 100px;
  margin-left: 12%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
