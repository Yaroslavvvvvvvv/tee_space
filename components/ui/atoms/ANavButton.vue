<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <button class="rounded-xl bg-black px-6 py-2 text-sm text-white transition hover:opacity-80">
    {{ title }}
  </button>
</template>

<style scoped>
</style>
