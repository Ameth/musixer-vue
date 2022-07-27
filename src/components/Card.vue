<template>
  <div class="card" v-for="item in data" :key="item.id">
    <div class="card-image">
      <img :src="item.album.cover_big" alt="album picture" />
    </div>
    <div class="card-footer">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.artist.name }}</h4>
      <h5>⭐{{ item.rank }}</h5>
      <div class="card-footer--btnPlay" @click="reproducir(item)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          class="card-footer--btnImg"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { reactive } from "vue";

const props = defineProps({
  data: Array,
  default: () => [],
});

const emit = defineEmits(["reproducir"]);

const reproducir = (data) => {
  emit("reproducir", [
    {
      title: data.title,
      artist: data.artist,
      preview: data.preview,
    },
  ]);
  //   console.log(info.title);
  //   console.log(info.artist.name);
  //   console.log(info.preview);
};
</script>

<style scoped>
/* Cards */

.card {
  position: relative;
  border: solid 5px gray;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  height: 320px;
  width: 300px;
  margin: 15px 15px 15px 15px;
}

.card-image img {
  position: absolute;
  width: 300px;
  height: 320px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}

.card-footer {
  position: absolute;
  background-color: black;
  -webkit-border-radius: 0px 0px 10px 10px;
  -moz-border-radius: 0px 0px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  top: 220px;
  width: 100%;
  height: 100px;
}

.card-footer h3 {
  color: white;
  font-size: 1.6em;
  margin: 2px 0px 1px 5px;
  font-weight: bold;
}

.card-footer h4 {
  color: #dadada;
  font-size: 1.4em;
  margin: 2px 0px 1px 5px;
  font-weight: bold;
}

.card-footer h5 {
  color: #e4d729;
  font-size: 1.3em;
  margin: 2px 0px 1px 5px;
}

.card-footer .btnPlay {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.card-footer--btnPlay {
  position: absolute;
  top: 20px;
  right: 15px;
}

.card-footer .card-footer--btnImg {
  fill: #0076bf;
  cursor: pointer;
}
.card-footer .card-footer--btnImg:hover {
  fill: #58b2eb;
}
</style>
