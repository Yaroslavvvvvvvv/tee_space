<script setup lang="ts">
import {defineProps} from 'vue';

defineProps({
  title: String,
});
</script>

<template>
  <button class="bg-black text-white text-sm py-2 px-6 rounded-xl hover:opacity-80 transition">
    {{ title }}
  </button>
</template>

<style scoped>

</style>