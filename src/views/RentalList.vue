<template>
  <div class="container">
    <div class="navbar"></div>
    <div class="search-block">
      <button class="apt">Apartment</button>
      <div class="search">
        <input type="text" placeholder="search" /><button class="btn">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="items-block">
      <div class="item-header">room</div>
      <div class="item-row">
        <div class="item-col">
          <img src="../assets/room.jpg" alt="room" />
          <div class="info">
            <div class="text">
              <p>Location: 237c Mao Tse Toung Boulevard (245), Phnom Penh</p>
              <p>Type:room</p>
              <p>Price:$$$$$$</p>
            </div>
            <div class="info-btn">
              <button class="rent-btn">Rent</button><br />
              <button class="view-btn">View detail</button>
            </div>
          </div>
        </div>
        <div class="item-col">
          <img src="../assets/room.jpg" alt="room" />
          <div class="info">
            <div class="text">
              <p>Location: 237c Mao Tse Toung Boulevard (245), Phnom Penh</p>
              <p>Type:room</p>
              <p>Price:$$$$$$</p>
            </div>
            <div class="info-btn">
              <button class="rent-btn">Rent</button><br />
              <button class="view-btn">View detail</button>
            </div>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-col">
          <img src="../assets/room.jpg" alt="room" />
          <div class="info">
            <div class="text">
              <p>Location: 237c Mao Tse Toung Boulevard (245), Phnom Penh</p>
              <p>Type:room</p>
              <p>Price:$$$$$$</p>
            </div>
            <div class="info-btn">
              <button class="rent-btn">Rent</button><br />
              <button class="view-btn">View detail</button>
            </div>
          </div>
        </div>
        <div class="item-col">
          <img src="../assets/room.jpg" alt="room" />
          <div class="info">
            <div class="text">
              <p>Location: 237c Mao Tse Toung Boulevard (245), Phnom Penh</p>
              <p>Type:room</p>
              <p>Price:$$$$$$</p>
            </div>
            <div class="info-btn">
              <button class="rent-btn">Rent</button><br />
              <button class="view-btn">View detail</button>
            </div>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-col">
          <img src="../assets/room.jpg" alt="room" />
          <div class="info">
            <div class="text">
              <p>Location: 237c Mao Tse Toung Boulevard (245), Phnom Penh</p>
              <p>Type:room</p>
              <p>Price:$$$$$$</p>
            </div>
            <div class="info-btn">
              <button class="rent-btn">Rent</button><br />
              <button class="view-btn">View detail</button>
            </div>
          </div>
        </div>
        <div class="item-col">
          <img src="../assets/room.jpg" alt="room" />
          <div class="info">
            <div class="text">
              <p>Location: 237c Mao Tse Toung Boulevard (245), Phnom Penh</p>
              <p>Type:room</p>
              <p>Price:$$$$$$</p>
            </div>
            <div class="info-btn">
              <button class="rent-btn">Rent</button><br />
              <button class="view-btn">View detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-left: 10%;
  display: flex;
  position: relative;
  width: 80%;
  align-items: center;
  flex-direction: column;
}
.search-block {
  align-items: center;
  width: 100%;
  display: flex;
  margin: 40px 0px 40px 30px;
  padding-left: 30px;
}
button {
  cursor: pointer;
  outline: none;
}
.apt {
  width: 200px;
  height: 40px;
  background-color: #5eafe9;
  outline: #5eafe9;
  border-radius: 10px;
  border: none;
  margin-left: 20px;
}
.search {
  margin-left: 20px;
  display: flex;
  width: 500px;
  justify-content: space-around;
}
input {
  width: 100%;
  border-radius: 50px;
  padding-left: 20px;
  border: 2px solid #5eafe9;
}
input:focus {
  outline: none;
}
.btn {
  width: 40px;
  height: 40px;
  position: relative;
  right: 35px;
  border-radius: 50%;
  background-color: #5eafe9;
  border: #5eafe9;
  color: white;
}
.items-block {
  cursor: pointer;
  overflow: auto;
  position: relative;
  width: 100%;
  margin-top: 20px;

  max-height: 760px;
}
.item-row {
  display: flex;
  width: 100%;
  margin: 20px;
  height: 350px;
}
.item-col {
  width: 100%;
  display: flex;
  background-color: #c4c4c4;
  margin: 10px 30px;
}

img {
  width: 50%;
  height: 100%;
}
.info {
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: left;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.info .rent-btn {
  margin: 10px 0;
  width: 100px;
  height: 40px;
  background-color: #29e025;
  border-radius: 5px;
  border: none;
  outline: none;
}
.info .view-btn {
  margin: 5px 0;
  width: 150px;
  height: 40px;
  background-color: #5eafe9;
  border-radius: 5px;
  border: none;
  outline: none;
  position: relative;
}
.item-header {
  background-color: #000;
  height: 40px;
  font-size: 30px;
  color: white;
  text-transform: uppercase;
  padding-top: 10px;
  position: fixed;
  width: 81.5%;
  margin-top: -20px;
}
::-webkit-scrollbar {
  display: none;
}
</style>