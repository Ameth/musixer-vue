<template>
  <div v-show="isPlayer">
    <h3>{{ player.title }}</h3>
    <h4>{{ player.artist }}</h4>
    <audio :src="player.preview" autoplay></audio>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { getRandom } from "@/js/functions";

const isPlayer = ref(false);

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  isPlayMusic: {
    type: Boolean,
    default: false,
  },
});

const title = ref("");
const artist = ref("");
const preview = ref("");

const player = computed(() => {
  // console.log(props.data[0]);
  if (props.data.length > 0) {
    const id = props.isPlayMusic ? 0 : getRandom(0, 24);
    isPlayer.value = true;
    title.value = props.data[id].title;
    artist.value = props.data[id].artist.name;
    preview.value = props.data[id].preview;
  }
  const res = {
    title: title.value,
    artist: artist.value,
    preview: preview.value,
  };

  // console.log(res);
  return res;
});
</script>

<style scoped>
</style>