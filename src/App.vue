<template>
  <div id="app" data-app>
    <Navbar/>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default{
  components: {
    Navbar,
    Footer,
  }
}
</script>
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
  background-color:#B9D7F3;
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
  height: 100%;
  object-fit: scale-down;
  cursor: pointer;
}
</style>
