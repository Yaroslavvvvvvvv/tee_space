<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { color = 'primary', variant = 'solid', href, to, bgColorClass } = defineProps<{
  color?: ElementColor
  variant?: ElementVariant
  bgColor?: string
  href?: string
  to?: RouteLocationRaw
  bgColorClass?: string
}>()

defineEmits<{
  click: []
}>()

const textColor = computed(() => elementColorMap.get(color)?.textColor[variant])
const bgColor = computed(() => bgColorClass || elementColorMap.get(color)?.bgColor[variant])
const bgColorHover = computed(() => elementColorMap.get(color)?.bgColorHover[variant])
const bgColorFocus = computed(() => elementColorMap.get(color)?.bgColorFocus[variant])

const tag = computed(() => href || to ? resolveComponent('NuxtLink') : 'button')
</script>

<template>
  <component
    :is="tag"
    :href="href || undefined"
    :to="to || undefined"
    :target="href ? '_blank' : undefined"
    class="inline-block rounded-lg px-5 py-2 outline-none transition-[color,background-color,transform] duration-150 active:scale-95"
    :class="[textColor, bgColor, bgColorHover, bgColorFocus]"
  >
    <slot />
  </component>
</template>
