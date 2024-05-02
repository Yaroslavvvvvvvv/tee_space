<script setup lang="ts">
import type { Product } from '../model/Product'

defineProps<{
  product: Product
  hot: boolean
  discount: number
}>()
</script>

<template>
  <div>
    <!-- <div>
      <img :src="product.image" :alt="product.name">
    </div>
    <div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <p v-if="hot">
        Hot
      </p>
      <p v-if="discount">
        Discount: {{ discount }}%
      </p>
    </div> -->
  </div>
</template>
