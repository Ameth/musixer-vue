<template>
  <img class="header-image" src="@/assets/backgroung.jpg" alt="" />
  <h2 class="header-title">Musixer</h2>
  <div class="header-searchbox">
    <input
      class="header-inputText"
      type="text"
      name="search"
      placeholder="Buscar..."
      id="search"
      autocomplete="off"
      v-model="query"
    />
    <button class="header-button-search" @click="consultar">Buscar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["buscar"]);

const query = ref("");

const consultar = () => {
  emit("buscar", query.value);
};
</script>