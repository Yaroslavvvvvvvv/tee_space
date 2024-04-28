<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { defineEmits } from 'vue'

const emit = defineEmits(['button-click'])
</script>

<template>
  <button
    type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    @click="emit('button-click')"
  >
    <span class="sr-only">Open main menu</span>
    <Bars3Icon class="size-6" aria-hidden="true" />
  </button>
</template>

<style scoped>

</style>
