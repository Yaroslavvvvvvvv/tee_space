<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
]
</script>

<template>
  <div>
    products:
    <div v-for="product in products" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>
