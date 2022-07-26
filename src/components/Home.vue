<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #content>
      <Card :results="result" />
    </template>
    <template #player>
      <Player />
    </template>
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Player from "@/components/Player.vue";

const result = [1, 2, 3, 4, 5];
</script>