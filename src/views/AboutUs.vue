<template>
  <div class="home">
    <v-container class="apartment">
      <v-card tile="" class="apt1">
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <v-img src="../assets/homon.jpg" max-width="500" class="img"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="card-title">What is HOMON?</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text">
              HOMON is a Cambodia website established in 2020 
              by a group of colleagues from Kirirom Institute of Technology. 
              Currently with almost 30,000 room and apartment available on
              our website we had help almost 15,000 students, workers 
              and everyone to find their room/apartment. 
            </v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <v-container class="vision">
      <v-card tile="" height="400" class="v1">
        <v-row align="start">
          <v-col>
            <v-card-title class="card-title">Our Vision</v-card-title>
            <v-divider />
            <v-card-text align="start" class="card-text"
              >Over 2800 apartment available From a normal apartment to a high
              class level of apartment for rent from all the area in Phnom
              Penh.Over 2800 apartment available From a normal apartment to a
              high class level of apartment for rent from all the area in Phnom
              Penh.</v-card-text
            > </v-col
          ><v-col class="shrink">
            <v-img src="../assets/map.png" max-width="350"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
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
.img {
  margin: 70px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
.apt1 {
  background-color: #c4c4c4;
  border-radius: 10px;
}
.vision {
  margin-top: 30px;
}
.v1 {
  background-color: #9af271;
  border-radius: 10px;
  padding: 15px;
}
</style>
