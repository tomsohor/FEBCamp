<template>
  <div id="app">
    <div id="nav">
      <div class="pic">dfsdfada</div>
      <div class="nav-route">
        <router-link to="/">Home</router-link> |
        <div class="dropdown">
          <span>Type</span>
          <div class="dropdown-content">
            <router-link to="/about">About</router-link> |
            <router-link to="/apartment">Apartment</router-link>
          </div>
        </div>
        |
        <router-link to="/aboutus">About Us</router-link>
      </div>
      <div class="sign">
        <button>
          <div class="dropdown">
            <span>Log in / Sign up</span>
            <div class="dropdown-content">
              <router-link to="/about">About</router-link> |
              <router-link to="/apartment">Apartment</router-link>
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
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav-route {
  padding-left: 50px;
  display: flex;
  width: 40%;
  justify-content: space-around;
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
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
