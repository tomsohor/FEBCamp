<template>
    <v-app-bar height="140px" color="#B9D7F3" >
        <router-link to="/">
            <v-img src="../assets/PP.png" max-height="400px" max-width="400px"></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <span id="btn">
            <router-link to="/">Home</router-link>
        </span>
        <span id="btn">
            <router-link to="/room">Rental Room</router-link>
        </span>
        <span id="btn">
            <router-link to="/apartment">Rental Apartment</router-link>
        </span>
        <span id="btn">
            <router-link to="/about">About</router-link>
        </span>
        <v-spacer></v-spacer>
        <span id="btn">
            <router-link to="/login">Login</router-link>
            /
            <router-link to="/signup">Sign Up</router-link>
        </span>
    </v-app-bar>
    
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#btn a{
    margin: 15px;
    background-color: #B9D7F3;
    color: black;
    font-size: 25px;
    text-decoration: none;
}
#log {
    background-color: black;
}
</style>