<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="content">
    <slot name="content"></slot>
  </div>
  <div class="player">
    <slot name="player"></slot>
  </div>
</template>

<style>
/*Header*/

.header {
  position: relative;
  width: 100%;
  /* height: 800px; */
}
.header-title {
  position: absolute;
  font-size: 80px;
  font-weight: bold;
  color: #ffff;
  margin: 70px 0px 0px 100px;
}
.header-image {
  position: absolute;
  width: 100%;
  top: -500px;
}
.header-searchbox {
  position: relative;
}
.header-inputText {
  position: absolute;
  top: 300px;
  left: 500px;
  font-size: 30px;
  background-color: #fff;
  width: 100vh;
  height: auto;
  margin: 0 auto 10px auto;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ccc;

  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
}

.header-button-search {
  position: absolute;
  cursor: pointer;
  top: 300px;
  left: 500px;
  font-size: 30px;
  width: auto;
  height: auto;
  margin: 0 auto 10px 585px;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ccc;
  border-radius: 30px;
}

/* Content */

.content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  top: 400px;
  background-color: black;
  width: 100%;
  height: 700px;
  padding-top: 30px;
}

/* Player */

.player {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0px;
  background-color: #6f6f6f;
  width: 100%;
  height: 50px;
  padding: 5px;
  opacity: 90%;
}

.player h3 {
  color: white;
  font-size: 1.6em;
  margin: 2px 0px 1px 5px;
  font-weight: bold;
}

.player h4 {
  color: white;
  font-weight: 300;
  font-size: 1.4em;
  margin: 2px 0px 1px 5px;
}

/* Utils */

.hidden {
  display: none;
}
</style>