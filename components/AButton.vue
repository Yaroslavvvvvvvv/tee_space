<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>

<template>
  <button>
    <slot />
  </button>
</template>
