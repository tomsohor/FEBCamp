<template>
  <div id="app">
    <div id="nav">
      <div class="pic">
        <v-col class="shrink">
          <router-link class="nav1" to="/">
            <v-img src="./assets/logo.svg" class="logo"></v-img>
          </router-link>
        </v-col>
      </div>
      <div class="nav-route">
        <router-link class="nav1" to="/"> Home</router-link>
        <div class="dropdown">
          <span>Type</span>
          <div class="dropdown-content">
            <router-link class="nav1" to="/room">Room</router-link><br />
            <hr />
            <router-link class="nav1" to="/apartment">Apartment</router-link>
          </div>
        </div>

        <router-link class="nav1" to="/about">About Us</router-link>
      </div>
      <div class="sign">
        <button>
          <div class="dropdown">
            <span class="inup">Log in / Sign up</span>
            <div class="dropdown-content">
              <router-link class="nav1" to="/login">login</router-link><br />
              <hr />
              <router-link class="nav1" to="/signup">signup</router-link>
            </div>
          </div>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #008b8b;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
hr {
  margin: 10px 0;
}
.nav-route {
  padding-left: 50px;
  display: flex;
  width: 40%;
  justify-content: space-around;
}
.nav1 {
  text-decoration: none;
}
.pic {
  width: 30%;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.dropdown {
  position: relative;
  display: inline-block;
  outline: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  outline: none;
}
.dropdown:hover .dropdown-content {
  display: block;
  outline: none;
}
.logo {
  width: 100%;
  height: 60px;
  object-fit: scale-down;
  cursor: pointer;
}
</style>
