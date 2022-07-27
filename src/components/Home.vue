<template>
  <Layout>
    <template #header>
      <Header @buscar="buscar" />
    </template>
    <template #content>
      <Card :data="result" @reproducir="reproducir" />
    </template>
    <template #player>
      <Player :data="dataPlay" :is-play-music="isPlayMusic" />
    </template>
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Player from "@/components/Player.vue";
import { getSearch } from "@/js/functions";
import { ref } from "vue";

const result = ref([]);
const dataPlay = ref([]);
const isPlayMusic = ref(false);

// getSearch("arjona").then((res) => (result.value = res));

// console.log("enhome", result.value);

const buscar = async (query) => {
  //   console.log("llego el evento: " + query);
  const response = await getSearch(query);
  //   console.log(response.data);
  result.value = response.data;
  dataPlay.value = response.data;
  isPlayMusic.value = false;
};

const reproducir = (data) => {
  isPlayMusic.value = true;
  //   console.log("desde rep", data);
  dataPlay.value = data;
};
</script>