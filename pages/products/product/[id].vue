<script setup lang="ts">
const { data } = await useFetch('/api/user')
</script>

<template>
  <div>
    product:
    <div>
      {{ data }}
    </div>
  </div>
</template>
