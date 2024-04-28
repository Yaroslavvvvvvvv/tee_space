<script setup lang="ts">
import {defineProps} from 'vue';

defineProps({
  title: String,
});
</script>

<template>
  <a href="#" class="flex items-center justify-between w-full text-sm font-bold text-black rounded hover:text-primary transition">
    {{ title }}
    <slot></slot>
  </a>
</template>

<style scoped>

</style>